-- ============================================================
-- REQUÊTES DQL (DATA QUERY LANGUAGE) — PROJET EQUA
-- ============================================================

-- 1. Afficher tous les utilisateurs inscrits
SELECT id, email, handle, "kycStatus" 
FROM "User";

-- 2. Afficher les contrats Escrow en cours de validation
SELECT id, amount, condition, status 
FROM "EscrowContract" 
WHERE status = 'PENDING';

-- 3. Consulter les transactions avec jointure (JOIN)
SELECT 
    t.id AS transaction_id,
    u.handle AS sender_handle,
    t.amount,
    t.currency,
    t.status
FROM "Transaction" t
JOIN "User" u ON t."senderId" = u.id;