-- ============================================================================
-- PROJET EQUA — DATA QUERY LANGUAGE (DQL) SUITE
-- Base de données : Neon PostgreSQL Cloud
-- Objectif : Audit, Statistiques Financières et Conformité Sandbox BCT
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. AUDIT UTILISATEURS & CONFORMITÉ KYC (Jointure Externe & Agrégation)
-- Objectif : Analyser le niveau KYC et le volume global émis par chaque utilisateur.
-- Concepts DQL : LEFT JOIN, COALESCE, GROUP BY, ALIASING.
-- ----------------------------------------------------------------------------
SELECT 
    u.id AS user_id,
    u.handle AS user_handle,
    u.email,
    u."walletAddress",
    u."kycStatus",
    COUNT(t.id) AS total_transactions_emises,
    COALESCE(SUM(t.amount), 0.00) AS volume_total_emitted_tnd
FROM "User" u
LEFT JOIN "Transaction" t ON u.id = t."senderId"
GROUP BY u.id, u.handle, u.email, u."walletAddress", u."kycStatus"
ORDER BY volume_total_emitted_tnd DESC;


-- ----------------------------------------------------------------------------
-- 2. INSPECTION DÉTAILLÉE DES CONTRATS ESCROW (Jointure Interne & Conditionnel)
-- Objectif : Lister les séquestres en attente avec détection automatique d'ancienneté.
-- Concepts DQL : INNER JOIN, WHERE, CASE WHEN (Logique Métier), DATES.
-- ----------------------------------------------------------------------------
SELECT 
    e.id AS escrow_id,
    e.amount AS montant_sequestre,
    e.condition AS condition_libere,
    e.status AS statut_contrat,
    u_sender.handle AS expediteur_handle,
    u_sender.email AS expediteur_email,
    e."recipientAddress" AS adresse_destinataire,
    e."createdAt" AS date_creation,
    CASE 
        WHEN e.status = 'PENDING' AND e."createdAt" < NOW() - INTERVAL '7 days' 
            THEN 'Alerte : En attente depuis +7 jours'
        WHEN e.status = 'PENDING' 
            THEN 'En cours de validation'
        ELSE 'Clôturé'
    END AS indicateur_conformite
FROM "EscrowContract" e
INNER JOIN "User" u_sender ON e."senderId" = u_sender.id
WHERE e.status = 'PENDING'
ORDER BY e."createdAt" ASC;


-- ----------------------------------------------------------------------------
-- 3. REPORTING FINANCIER PAR DEVISE (Agrégation Avancée & Filtrage)
-- Objectif : Obtenir la répartition des volumes pour le tableau de bord Sandbox BCT.
-- Concepts DQL : GROUP BY, SUM, AVG, MIN, MAX, HAVING.
-- ----------------------------------------------------------------------------
SELECT 
    t.currency AS devise,
    t.status AS statut_transaction,
    COUNT(t.id) AS nombre_operations,
    SUM(t.amount) AS volume_total,
    ROUND(AVG(t.amount), 2) AS montant_moyen,
    MIN(t.amount) AS transaction_min,
    MAX(t.amount) AS transaction_max
FROM "Transaction" t
GROUP BY t.currency, t.status
HAVING COUNT(t.id) > 0
ORDER BY volume_total DESC;


-- ----------------------------------------------------------------------------
-- 4. ANALYSE AVANCÉE : TOP TRANSACTIONS & CUMUL PAR UTILISATEUR (CTE & Window Functions)
-- Objectif : Requête DQL de niveau expert montrant le classement des opérations.
-- Concepts DQL : CTE (WITH), OVER (PARTITION BY / ORDER BY), DENSE_RANK.
-- ----------------------------------------------------------------------------
WITH AnalyticsUserTransactions AS (
    SELECT 
        u.handle AS utilisateur,
        t.id AS transaction_id,
        t.amount AS montant,
        t.currency AS devise,
        t."createdAt" AS date_transaction,
        -- Calcul du volume cumulé par utilisateur au fil du temps
        SUM(t.amount) OVER (
            PARTITION BY u.id 
            ORDER BY t."createdAt"
        ) AS volume_cumule_utilisateur,
        -- Rang de la transaction par montant selon la devise
        DENSE_RANK() OVER (
            PARTITION BY t.currency 
            ORDER BY t.amount DESC
        ) AS rang_montant
    FROM "Transaction" t
    INNER JOIN "User" u ON t."senderId" = u.id
    WHERE t.status = 'COMPLETED'
)
SELECT *
FROM AnalyticsUserTransactions
WHERE rang_montant <= 5
ORDER BY devise, rang_montant ASC;