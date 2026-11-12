<div align="center">
EQUA — Equitable, Quick & Universal Access
 
### Le protocole de paiement et de séquestre (Escrow) on-chain, conforme et accessible à tous.
 
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon_Cloud-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Solidity](https://img.shields.io/badge/Solidity-ERC--20_%7C_Escrow-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Hardhat](https://img.shields.io/badge/Hardhat-Smart_Contracts-F7DF1E?style=for-the-badge&logo=ethereum&logoColor=black)](https://hardhat.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
 
**[📦 Dépôt GitHub](https://github.com/fz-hazem/EQUA)** · **[🚀 Quick Start](#-quick-start--installation-pas-à-pas)** · **[🗄️ Volet DQL](#️-volet-dql--data-query-language-sur-neon-postgresql-cloud)** · **[📋 Livrables](#-conformité-aux-consignes-de-rendu-livrables)**
 
</div>

 
## 📑 Table des matières
 
1. [Vision & problématique](#-vision--problématique)
2. [Architecture globale (Monorepo Turborepo)](#️-architecture-globale-monorepo-turborepo)
3. [Tech Stack](#-tech-stack)
4. [Justification des choix technologiques](#-justification-des-choix-technologiques)
5. [Fonctionnalités clés](#-fonctionnalités-clés)
6. [Pages dynamiques du Frontend](#-pages-dynamiques-du-frontend)
7. [Smart Contracts (Hardhat / Solidity)](#-smart-contracts-hardhat--solidity)
8. [Backend NestJS & modèle de données Prisma](#-backend-nestjs--modèle-de-données-prisma)
9. [Volet DQL sur Neon PostgreSQL Cloud (Sandbox BCT)](#️-volet-dql--data-query-language-sur-neon-postgresql-cloud)
10. [Quick Start — Installation pas-à-pas](#-quick-start--installation-pas-à-pas)
11. [Scripts utiles](#-scripts-utiles)
12. [Sécurité & conformité](#-sécurité--conformité)
13. [Conformité aux consignes de rendu (Livrables)](#-conformité-aux-consignes-de-rendu-livrables)
14. [Auteur](#-auteur)
---
 
## 🎯 Vision & problématique
 
> 💡 **EQUA** (*Equitable, Quick & Universal Access*) est une plateforme décentralisée qui permet d'**émettre, sécuriser et libérer des paiements via un mécanisme de séquestre (Escrow) on-chain**, tout en intégrant un **module de vérification d'identité (KYC)** adapté à un cadre réglementaire de type **Sandbox BCT-Lab**.
 
**Le problème :** les paiements transfrontaliers et les transactions entre parties qui ne se font pas confiance sont lents, coûteux et peu transparents. L'accès aux services financiers reste inégal.
 
**La réponse d'EQUA :**
 
| Pilier | Réponse technique |
|---|---|
| ⚖️ **Equitable** | Règles de séquestre codées dans un smart contract : transparentes, auditables, identiques pour tous. |
| ⚡ **Quick** | Règlement on-chain quasi instantané, interface temps réel, API REST performante. |
| 🌐 **Universal** | Accès via simple portefeuille Web3, interface responsive, onboarding KYC guidé. |
 
---
 
## 🏗️ Architecture globale (Monorepo Turborepo)
 
Le projet est organisé en **monorepo Turborepo** : un seul dépôt, plusieurs applications et packages, des builds mis en cache et parallélisés.
 
```mermaid
flowchart LR
    U[👤 Utilisateur + Wallet] -->|Wagmi / Viem| FE[🖥️ Frontend<br/>Next.js 14 App Router]
    FE -->|HTTP REST| BE[⚙️ Backend<br/>NestJS API]
    FE -->|JSON-RPC| SC[⛓️ Smart Contracts<br/>ERC-20 + Escrow]
    BE -->|Prisma ORM| DB[(🐘 PostgreSQL<br/>Neon Cloud)]
    BE -->|Indexation d'événements| SC
    DQL[📄 dql.sql<br/>Requêtes SQL brutes] -.->|Analytique| DB
```
 
### 📂 Structure du dépôt
 
```text
EQUA/
├── apps/
│   ├── web/              # Frontend Next.js 14 (App Router, Wagmi/Viem, Tailwind)
│   └── api/              # Backend NestJS (REST, Prisma, PostgreSQL)
├── packages/
│   └── contracts/        # Smart contracts Solidity + Hardhat (ERC-20, Escrow)
├── dql.sql               # ⭐ Requêtes DQL avancées (JOIN, CTE, Window Functions…)
├── turbo.json            # Pipeline Turborepo
├── package.json          # Workspaces racine
└── README.md
```
 
> 📌 *Les chemins peuvent légèrement varier selon l'organisation exacte des workspaces ; la logique reste identique : `web` ⟷ `api` ⟷ `contracts`.*
 
---
 
## 🧰 Tech Stack
 
| Couche | Technologies | Rôle |
|---|---|---|
| **Monorepo** | Turborepo, npm/pnpm workspaces | Orchestration, cache de build, scripts partagés |
| **Frontend** | Next.js 14 (App Router), React, TypeScript, TailwindCSS | Interface utilisateur, rendu hybride SSR/CSR |
| **Web3 client** | Wagmi, Viem | Connexion wallet, lecture/écriture on-chain typées |
| **Backend** | NestJS, TypeScript | API REST modulaire, validation, logique métier |
| **ORM / BDD** | Prisma ORM, PostgreSQL (Neon Cloud) | Modélisation, migrations, persistance serverless |
| **Blockchain** | Solidity, Hardhat | Token ERC-20, contrat d'Escrow, tests & déploiement |
| **SQL / DQL** | Fichier `dql.sql` | Requêtes analytiques brutes sur Neon PostgreSQL |
 
---
 
## 🧠 Justification des choix technologiques
 
### 🖥️ Pourquoi **Next.js 14 (App Router)** pour le Frontend ?
 
| Critère | Apport pour EQUA |
|---|---|
| **React Server Components** | Les pages chargent leurs données côté serveur : moins de JavaScript envoyé au client, premier affichage plus rapide. |
| **Routage par système de fichiers** | Les 5 pages (`/`, `/dashboard`, `/escrow`, `/transactions`, `/kyc`) sont de simples dossiers dans `app/` : structure lisible et maintenable. |
| **Rendu hybride (SSR / SSG / CSR)** | Landing page statique et performante (SEO), pages applicatives dynamiques avec données temps réel. |
| **Layouts imbriqués** | Navigation, providers Wagmi et thème partagés sans duplication. |
| **Écosystème Web3** | Intégration native et éprouvée avec Wagmi / Viem (hooks React typés pour wallet, lecture et écriture de contrats). |
| **TypeScript de bout en bout** | Sécurité de typage jusque dans les ABI des contrats grâce à Viem. |
 
### ⚙️ Pourquoi **NestJS** pour le Backend ?
 
| Critère | Apport pour EQUA |
|---|---|
| **Architecture modulaire** | Chaque domaine (KYC, escrow, transactions, utilisateurs) est un module isolé : séparation des responsabilités claire. |
| **Injection de dépendances** | Code testable, services découplés, mocks faciles pour les tests unitaires. |
| **Décorateurs & Pipes** | Validation systématique des entrées (DTO + `class-validator`) : indispensable pour une application financière. |
| **TypeScript natif** | Même langage que le frontend : types et DTO partageables, productivité accrue. |
| **Intégration Prisma** | Accès BDD fortement typé, migrations versionnées, compatibilité parfaite avec PostgreSQL. |
| **Guards & Interceptors** | Contrôle d'accès, journalisation et gestion d'erreurs centralisés (base d'une conformité réglementaire). |
 
### 🐘 Pourquoi **PostgreSQL sur Neon Cloud** ?
 
- ✅ SQL standard riche : **CTE, Window Functions, agrégations conditionnelles** (cœur du volet DQL).
- ✅ **Serverless & autoscaling** : aucune infrastructure à gérer, idéal pour un projet académique déployable en quelques minutes.
- ✅ **Branching de base de données** : environnements de test isolés.
- ✅ Intégrité transactionnelle **ACID**, essentielle pour des flux financiers.
### ⛓️ Pourquoi **Hardhat + Solidity** ?
 
- Environnement de test local rapide (réseau Hardhat intégré), scripts de déploiement, typage TypeScript, et standards **ERC-20** audités (OpenZeppelin) pour réduire la surface d'attaque.
---
 
## ✨ Fonctionnalités clés
 
### 💎 Protocole & Smart Contracts
- 🪙 **Token ERC-20** : émission, transferts, approbations (`approve` / `transferFrom`).
- 🔐 **Contrat d'Escrow (séquestre)** : verrouillage des fonds, libération conditionnelle, remboursement.
- 📡 **Événements on-chain** (création, libération, annulation) exploitables pour l'indexation.
### 🖥️ Application web
- 🔌 **Connexion wallet** (Wagmi / Viem) avec détection du réseau et du compte.
- 📊 **Dashboard temps réel** : solde du portefeuille et synthèse d'activité.
- 📝 **Création et libération d'escrows** depuis l'interface, avec retour d'état des transactions (en attente / confirmée / échouée).
- 🧾 **Historique dynamique** des flux financiers avec filtres et statuts.
- 🪪 **Module KYC** : parcours de vérification d'identité aligné sur la **Sandbox BCT-Lab**.
### ⚙️ API REST (NestJS)
- 🧩 Architecture modulaire (users, kyc, escrows, transactions).
- ✅ Validation des DTO, gestion d'erreurs homogène.
- 🗃️ Persistance via **Prisma ORM** sur PostgreSQL (Neon).
- 🔗 Synchronisation entre état on-chain et état off-chain (traçabilité des transactions).
### 🗄️ Data & Analytique
- 📄 **`dql.sql`** : requêtes SQL brutes avancées pour l'analyse des flux, des escrows et de la conformité KYC.
---
 
## 🧭 Pages dynamiques du Frontend
 
| Route | Page | Description | Données dynamiques |
|---|---|---|---|
| `/` | 🏠 **Landing Page** | Présentation du protocole EQUA, proposition de valeur, appel à l'action. | Contenu de présentation, état de connexion wallet |
| `/dashboard` | 📊 **Dashboard** | Tableau de bord du portefeuille et solde en temps réel. | Solde on-chain, activité récente |
| `/escrow` | 🔐 **Escrow** | Interface d'émission et de libération des séquestres. | Écriture contrat, statut des transactions |
| `/transactions` | 🧾 **Transactions** | Historique dynamique des flux financiers. | Données API + base PostgreSQL |
| `/kyc` | 🪪 **KYC** | Vérification d'identité et conformité, Sandbox BCT-Lab. | Statut KYC, soumission de dossier |
 
---
 
## ⛓️ Smart Contracts (Hardhat / Solidity)
 
| Contrat | Standard | Responsabilité |
|---|---|---|
| **Token EQUA** | ERC-20 | Actif de règlement du protocole (transferts, allowances). |
| **Escrow** | Contrat de séquestre | Verrouille les fonds d'un payeur, les libère au bénéficiaire sur validation, ou les rembourse. |
 
**Cycle de vie d'un séquestre :**
 
```mermaid
stateDiagram-v2
    [*] --> Créé: createEscrow()
    Créé --> Financé: dépôt des fonds ERC-20
    Financé --> Libéré: release() par le payeur
    Financé --> Remboursé: refund()
    Libéré --> [*]
    Remboursé --> [*]
```
 
**Commandes Hardhat :**
 
```bash
npx hardhat compile      # Compilation des contrats
npx hardhat test         # Exécution de la suite de tests
npx hardhat node         # Réseau blockchain local
npx hardhat run scripts/deploy.ts --network localhost   # Déploiement
```
 
---
 
## ⚙️ Backend NestJS & modèle de données Prisma
 
### 🧱 Modules principaux
 
| Module | Responsabilité |
|---|---|
| `UsersModule` | Gestion des utilisateurs et adresses de portefeuille |
| `KycModule` | Soumission et suivi des vérifications d'identité |
| `EscrowModule` | Suivi des séquestres (état on-chain ⟷ off-chain) |
| `TransactionsModule` | Historique et consultation des flux financiers |
| `PrismaModule` | Accès base de données partagé (singleton) |
 
### 🗺️ Modèle de données (vue conceptuelle)
 
```mermaid
erDiagram
    USER ||--o{ TRANSACTION : "émet / reçoit"
    USER ||--o| KYC_RECORD : "possède"
    USER ||--o{ ESCROW : "crée"
    ESCROW ||--o{ TRANSACTION : "génère"
 
    USER {
        uuid id PK
        string walletAddress
        datetime createdAt
    }
    KYC_RECORD {
        uuid id PK
        uuid userId FK
        string status
        datetime verifiedAt
    }
    ESCROW {
        uuid id PK
        uuid payerId FK
        string beneficiary
        decimal amount
        string status
    }
    TRANSACTION {
        uuid id PK
        uuid escrowId FK
        string txHash
        decimal amount
        string status
        datetime createdAt
    }
```
 
> 📌 *Le schéma Prisma de référence (`schema.prisma`) fait foi ; le diagramme ci-dessus en donne la vue conceptuelle.*
 
---
 
## 🗄️ Volet DQL — Data Query Language sur Neon PostgreSQL Cloud
 
> 🎓 **Point clé du barème.** Le fichier **[`dql.sql`](./dql.sql)**, situé **à la racine du dépôt**, regroupe des **requêtes SQL brutes avancées**, exécutées sur la base **PostgreSQL hébergée sur Neon Cloud**. Elles servent la **Sandbox BCT** : analyse des flux financiers, suivi des séquestres et supervision de la conformité KYC.
 
### 📋 Couverture des concepts DQL
 
| Concept SQL | Utilité métier dans EQUA | Présent dans `dql.sql` |
|---|---|---|
| `JOIN` (INNER) | Associer utilisateurs, escrows et transactions | ✅ |
| `LEFT JOIN` | Lister **tous** les utilisateurs, y compris ceux sans KYC ni transaction | ✅ |
| `GROUP BY` / `HAVING` | Agréger les volumes par utilisateur, filtrer les comptes significatifs | ✅ |
| `CASE WHEN` | Catégoriser les statuts (conforme / en attente / rejeté) et segmenter les montants | ✅ |
| `CTE` (`WITH`) | Décomposer des analyses complexes en étapes lisibles | ✅ |
| `Window Functions` | Classements, cumuls et comparaisons temporelles sans perdre le détail des lignes | ✅ |
 
### 🔎 Extraits représentatifs
 
> ℹ️ *Les extraits ci-dessous illustrent les techniques mises en œuvre. Le fichier [`dql.sql`](./dql.sql) contient la version complète et exécutable adaptée au schéma réel.*
 
**1️⃣ `LEFT JOIN` + `CASE WHEN` — Statut de conformité de tous les utilisateurs**
 
```sql
SELECT
    u.id,
    u."walletAddress",
    CASE
        WHEN k.status = 'VERIFIED' THEN 'Conforme'
        WHEN k.status = 'PENDING'  THEN 'En cours de vérification'
        WHEN k.status = 'REJECTED' THEN 'Rejeté'
        ELSE 'KYC non soumis'
    END AS statut_conformite
FROM "User" u
LEFT JOIN "KycRecord" k ON k."userId" = u.id
ORDER BY u."createdAt" DESC;
```
 
**2️⃣ `JOIN` + `GROUP BY` + `HAVING` — Utilisateurs à fort volume de flux**
 
```sql
SELECT
    u."walletAddress",
    COUNT(t.id)   AS nb_transactions,
    SUM(t.amount) AS volume_total
FROM "User" u
JOIN "Escrow" e      ON e."payerId" = u.id
JOIN "Transaction" t ON t."escrowId" = e.id
GROUP BY u."walletAddress"
HAVING SUM(t.amount) > 1000
ORDER BY volume_total DESC;
```
 
**3️⃣ `CTE` + `Window Function` — Classement et cumul des flux par utilisateur**
 
```sql
WITH volumes AS (
    SELECT
        e."payerId",
        DATE_TRUNC('day', t."createdAt") AS jour,
        SUM(t.amount)                     AS volume_jour
    FROM "Transaction" t
    JOIN "Escrow" e ON e.id = t."escrowId"
    GROUP BY e."payerId", DATE_TRUNC('day', t."createdAt")
)
SELECT
    "payerId",
    jour,
    volume_jour,
    SUM(volume_jour) OVER (PARTITION BY "payerId" ORDER BY jour) AS cumul,
    RANK()           OVER (PARTITION BY jour ORDER BY volume_jour DESC) AS rang_du_jour
FROM volumes
ORDER BY jour, rang_du_jour;
```
 
### ▶️ Exécuter le fichier DQL sur Neon
 
```bash
# Option 1 — via psql (la variable DATABASE_URL pointe vers Neon)
psql "$DATABASE_URL" -f dql.sql
 
# Option 2 — via la console SQL Editor de Neon : copier/coller le contenu de dql.sql
```
 
> ✅ **Résultat attendu :** chaque requête s'exécute sans erreur sur la base Neon PostgreSQL et retourne un jeu de résultats exploitable pour l'analyse de la Sandbox BCT.
 
---
 
## 🚀 Quick Start — Installation pas-à-pas
 
### ✅ Prérequis
 
| Outil | Version recommandée |
|---|---|
| Node.js | ≥ 18.17 (LTS recommandé) |
| npm / pnpm | npm ≥ 9 ou pnpm ≥ 8 |
| Git | Dernière version |
| Wallet Web3 | MetaMask (ou compatible) |
| Compte Neon | [neon.tech](https://neon.tech/) (offre gratuite suffisante) |
 
### 1️⃣ Cloner le dépôt
 
```bash
git clone https://github.com/fz-hazem/EQUA.git
cd EQUA
```
 
### 2️⃣ Installer les dépendances (monorepo)
 
```bash
npm install
# ou : pnpm install
```
 
### 3️⃣ Configurer les variables d'environnement
 
**Backend — `apps/api/.env`**
 
```env
# Base de données Neon PostgreSQL
DATABASE_URL="postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require"
 
# API
PORT=4000
```
 
**Frontend — `apps/web/.env.local`**
 
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_CHAIN_ID=31337
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_TOKEN_ADDRESS=0x...     # adresse du token ERC-20 déployé
NEXT_PUBLIC_ESCROW_ADDRESS=0x...    # adresse du contrat Escrow déployé
```
 
> ⚠️ **Ne jamais commiter de fichier `.env`** : vérifier qu'ils sont bien listés dans `.gitignore`.
 
### 4️⃣ Démarrer la blockchain locale et déployer les contrats
 
```bash
# Terminal 1 — réseau local Hardhat
cd packages/contracts
npx hardhat node
 
# Terminal 2 — compilation + déploiement
npx hardhat compile
npx hardhat run scripts/deploy.ts --network localhost
```
 
Reporter les adresses affichées dans `apps/web/.env.local`.
 
### 5️⃣ Initialiser la base de données (Prisma + Neon)
 
```bash
cd apps/api
npx prisma generate
npx prisma migrate dev --name init
```
 
### 6️⃣ Lancer l'ensemble de l'application
 
```bash
# Depuis la racine du monorepo : lance web + api en parallèle via Turborepo
npm run dev
```
 
| Service | URL |
|---|---|
| 🖥️ Frontend | http://localhost:3000 |
| ⚙️ API NestJS | http://localhost:4000 |
| ⛓️ Nœud Hardhat | http://127.0.0.1:8545 |
 
### 7️⃣ Exécuter le volet DQL
 
```bash
psql "$DATABASE_URL" -f dql.sql
```
 
### ✔️ Vérification rapide
 
- [ ] La landing page `/` s'affiche.
- [ ] Le wallet se connecte et le solde apparaît sur `/dashboard`.
- [ ] Un escrow peut être créé puis libéré depuis `/escrow`.
- [ ] L'historique s'affiche sur `/transactions`.
- [ ] Le parcours de vérification s'ouvre sur `/kyc`.
- [ ] `dql.sql` s'exécute sans erreur sur Neon.
---
 
## 🛠️ Scripts utiles
 
| Commande | Description |
|---|---|
| `npm run dev` | Lance tous les services en mode développement (Turborepo) |
| `npm run build` | Build de production de tous les workspaces |
| `npm run lint` | Analyse statique du code |
| `npx prisma studio` | Interface graphique pour explorer la base de données |
| `npx prisma migrate dev` | Applique les migrations Prisma |
| `npx hardhat test` | Lance les tests des smart contracts |
| `psql "$DATABASE_URL" -f dql.sql` | Exécute les requêtes DQL sur Neon |
 
---
 
## 🔒 Sécurité & conformité
 
| Domaine | Mesure |
|---|---|
| **Smart contracts** | Standards ERC-20 éprouvés, logique d'escrow minimaliste, tests Hardhat des cas nominaux et limites. |
| **Backend** | Validation stricte des entrées (DTO), gestion centralisée des erreurs, requêtes paramétrées via Prisma (protection contre l'injection SQL). |
| **Données** | Connexion TLS à Neon (`sslmode=require`), secrets hors du dépôt via variables d'environnement. |
| **Conformité** | Module KYC aligné sur les principes de la **Sandbox BCT-Lab** (identification, traçabilité, suivi du statut). |
| **Traçabilité** | Chaque flux est relié à un hash de transaction on-chain et à une entrée en base. |
 
---
 
## 📋 Conformité aux consignes de rendu (Livrables)
 
| # | Exigence | Statut | Où le vérifier |
|---|---|:---:|---|
| 1 | Projet hébergé sur **GitHub** | ✅ | [github.com/fz-hazem/EQUA](https://github.com/fz-hazem/EQUA) |
| 2 | **Monorepo Turborepo** (frontend + backend + contrats) | ✅ | `turbo.json`, `apps/`, `packages/` |
| 3 | **Frontend Next.js 14** (App Router) avec **5 pages dynamiques** | ✅ | `/`, `/dashboard`, `/escrow`, `/transactions`, `/kyc` — voir [Pages](#-pages-dynamiques-du-frontend) |
| 4 | **Backend API REST NestJS** + Prisma ORM | ✅ | `apps/api/` — voir [Backend](#️-backend-nestjs--modèle-de-données-prisma) |
| 5 | **Base PostgreSQL sur Neon Cloud** | ✅ | Variable `DATABASE_URL` — voir [Quick Start](#-quick-start--installation-pas-à-pas) |
| 6 | **Smart Contracts** Solidity (ERC-20, Escrow) avec Hardhat | ✅ | `packages/contracts/` — voir [Smart Contracts](#-smart-contracts-hardhat--solidity) |
| 7 | **Fichier `dql.sql` à la racine** (JOIN, LEFT JOIN, GROUP BY/HAVING, CASE WHEN, CTE, Window Functions) | ✅ | [`dql.sql`](./dql.sql) — voir [Volet DQL](#️-volet-dql--data-query-language-sur-neon-postgresql-cloud) |
| 8 | **Justification des frameworks** (Next.js 14 & NestJS) | ✅ | [Justification](#-justification-des-choix-technologiques) |
| 9 | **Fonctionnalités détaillées** | ✅ | [Fonctionnalités clés](#-fonctionnalités-clés) |
| 10 | **Guide d'installation et de lancement** | ✅ | [Quick Start](#-quick-start--installation-pas-à-pas) |
| 11 | **Mise en valeur du DQL sur Neon (Sandbox BCT)** | ✅ | [Volet DQL](#️-volet-dql--data-query-language-sur-neon-postgresql-cloud) |
| 12 | **README structuré et professionnel** | ✅ | Ce document |
 
## Déploiement en ligne

- **Application Web (Frontend Next.js)** : https://equa-frontend1.onrender.com
- **API REST (Backend NestJS)** : https://equa-5.onrender.com

> *Note : Les services étant hébergés sur l'offre gratuite de Render, le premier chargement peut prendre environ 50 secondes pour sortir les serveurs de veille.* 
