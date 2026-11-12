<div align="center">

# 🌍 EQUA — Equitable, Quick & Universal Access

**Protocole de paiement et de séquestre (Escrow) on-chain, conforme et accessible à tous.**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-REST_API-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon_Cloud-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Solidity](https://img.shields.io/badge/Solidity-ERC--20_%7C_Escrow-363636?style=for-the-badge&logo=solidity&logoColor=white)](https://soliditylang.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)

[📦 Dépôt GitHub](https://github.com/fz-hazem/EQUA)

</div>

---

## 📑 Sommaire

| # | Section | Critère d'évaluation |
|---|---|---|
| 0 | [Présentation du projet](#-présentation-du-projet) | Contexte |
| 1 | [Choix des frameworks](#1--choix-des-frameworks) | ✅ Critère 1 |
| 2 | [Fonctionnalités développées](#2--fonctionnalités-développées) | ✅ Critère 2 |
| 3 | [Lancement du projet](#3--lancement-du-projet-pas-à-pas) | ✅ Critère 3 |
| 4 | [Récapitulatif des livrables](#-récapitulatif-des-livrables) | Conformité |

---

## 🎯 Présentation du projet

> 💡 **EQUA** permet d'**émettre, sécuriser et libérer des paiements via un séquestre (Escrow) on-chain**, avec un **module KYC** aligné sur la **Sandbox BCT-Lab**.

| Pilier | Réponse technique |
|---|---|
| ⚖️ **Equitable** | Règles d'escrow codées dans un smart contract : transparentes et identiques pour tous |
| ⚡ **Quick** | Règlement on-chain rapide, interface temps réel, API REST performante |
| 🌐 **Universal** | Accès par simple wallet Web3, interface responsive, onboarding KYC guidé |

### 🏗️ Architecture (Monorepo Turborepo)

```mermaid
flowchart LR
    U[👤 Utilisateur + Wallet] -->|Wagmi / Viem| FE[🖥️ Next.js 14]
    FE -->|REST| BE[⚙️ NestJS API]
    FE -->|JSON-RPC| SC[⛓️ Solidity<br/>ERC-20 + Escrow]
    BE -->|Prisma ORM| DB[(🐘 PostgreSQL<br/>Neon Cloud)]
    DQL[📄 dql.sql] -.->|SQL brut| DB
```

```text
EQUA/
├── apps/
│   ├── web/              # Frontend Next.js 14 (App Router, Wagmi/Viem, Tailwind)
│   └── api/              # Backend NestJS + Prisma
├── packages/
│   └── contracts/        # Smart contracts Solidity + Hardhat
├── dql.sql               # ⭐ Requêtes SQL avancées (DQL)
├── turbo.json            # Pipeline Turborepo
└── package.json          # Workspaces
```

| Couche | Technologies |
|---|---|
| **Monorepo** | Turborepo |
| **Frontend** | Next.js 14 (App Router), Wagmi / Viem, TailwindCSS, TypeScript |
| **Backend** | NestJS (API REST), Prisma ORM, TypeScript |
| **Base de données** | PostgreSQL hébergé sur Neon.tech |
| **Blockchain** | Solidity (ERC-20, Escrow), Hardhat |

---

## 1. 🧠 Choix des frameworks

### 🖥️ Frontend — Next.js 14 (App Router)

| Critère | Justification pour EQUA |
|---|---|
| ⚡ **Performance** | React Server Components : moins de JavaScript envoyé au navigateur, premier affichage rapide. |
| 🔀 **Rendu hybride** | SSG/SSR pour la landing page (SEO, vitesse) et rendu client pour les pages Web3 temps réel (solde, escrow). |
| 🗂️ **Routage par fichiers** | Les 5 pages sont de simples dossiers dans `app/` : structure lisible et maintenable. |
| 🧱 **Layouts imbriqués** | Navigation et providers Wagmi/Viem partagés sans duplication. |
| 🔌 **Écosystème Web3** | Intégration native avec Wagmi / Viem (hooks typés pour wallet, lecture et écriture de contrats). |
| 🔒 **Typage TypeScript** | Types de bout en bout, jusque dans les ABI des contrats via Viem. |

### ⚙️ Backend — NestJS

| Critère | Justification pour EQUA |
|---|---|
| 🧩 **Architecture modulaire** | Un module par domaine (users, KYC, escrow, transactions) : séparation claire des responsabilités. |
| 💉 **Injection de dépendances** | Services découplés et facilement testables. |
| ✅ **DTO + Pipes de validation** | Validation systématique des entrées, indispensable pour une application financière. |
| 🔒 **Typage TypeScript natif** | Même langage que le frontend : cohérence et productivité dans le monorepo. |
| 🗃️ **Intégration Prisma** | Accès à PostgreSQL fortement typé, migrations versionnées. |
| 🛡️ **Guards & Interceptors** | Contrôle d'accès, journalisation et gestion d'erreurs centralisés. |

### 📦 Monorepo — Turborepo

- ✔️ Un seul dépôt pour le frontend, le backend et les smart contracts.
- ✔️ Builds **parallélisés et mis en cache** ; scripts partagés (`npm run dev` lance tout).
- ✔️ Cohérence des versions et du typage entre les applications.

### 🐘 Données & Blockchain

- **PostgreSQL sur Neon** : SQL avancé (CTE, Window Functions), serverless, transactions ACID.
- **Hardhat + Solidity** : tests locaux rapides, déploiement scripté, standard ERC-20 éprouvé.

---

## 2. ✨ Fonctionnalités développées

### 🧭 Les 5 pages dynamiques du Frontend

| Route | Page | Fonctionnalités |
|---|---|---|
| `/` | 🏠 **Landing Page** | Présentation du protocole EQUA, proposition de valeur, appel à l'action, connexion wallet. |
| `/dashboard` | 📊 **Dashboard — Solde** | Tableau de bord du portefeuille, **solde en temps réel**, synthèse de l'activité. |
| `/escrow` | 🔐 **Gestion des Séquestres** | **Émission** d'un escrow, **libération** des fonds, suivi du statut des transactions on-chain. |
| `/transactions` | 🧾 **Historique des Transactions** | Historique **dynamique** des flux financiers (données API + PostgreSQL), statuts et hash de transaction. |
| `/kyc` | 🪪 **Module KYC — Sandbox BCT-Lab** | Vérification d'identité et conformité : soumission du dossier et suivi du statut. |

### ⛓️ Smart Contracts (Hardhat)

| Contrat | Rôle |
|---|---|
| **Token ERC-20** | Actif de règlement du protocole (transferts, `approve` / `transferFrom`). |
| **Escrow** | Verrouille les fonds, les libère au bénéficiaire ou les rembourse. |

### ⚙️ API REST NestJS

- Modules : `users`, `kyc`, `escrow`, `transactions`.
- Persistance via **Prisma ORM** sur **Neon PostgreSQL**.
- Synchronisation entre l'état on-chain et la base de données (traçabilité par hash de transaction).

### 🗄️ Module DQL / SQL brut — [`dql.sql`](./dql.sql)

> 🎓 Fichier situé **à la racine du dépôt**, contenant des **requêtes SQL brutes avancées** exécutées sur **Neon PostgreSQL Cloud** pour la **Sandbox BCT** (analyse des flux, suivi des escrows, supervision KYC).

| Concept SQL | Utilité dans EQUA |
|---|---|
| `JOIN` | Relier utilisateurs, escrows et transactions |
| `LEFT JOIN` | Lister tous les utilisateurs, même sans KYC ni transaction |
| `GROUP BY` / `HAVING` | Agréger les volumes par utilisateur et filtrer les comptes significatifs |
| `CASE WHEN` | Catégoriser les statuts de conformité et segmenter les montants |
| `CTE` (`WITH`) | Décomposer des analyses complexes en étapes lisibles |
| `Window Functions` | Cumuls et classements sans perdre le détail des lignes |

**Exemple (CTE + Window Functions) :**

```sql
WITH volumes AS (
    SELECT e."payerId",
           DATE_TRUNC('day', t."createdAt") AS jour,
           SUM(t.amount)                    AS volume_jour
    FROM "Transaction" t
    JOIN "Escrow" e ON e.id = t."escrowId"
    GROUP BY e."payerId", DATE_TRUNC('day', t."createdAt")
)
SELECT "payerId", jour, volume_jour,
       SUM(volume_jour) OVER (PARTITION BY "payerId" ORDER BY jour)       AS cumul,
       RANK()           OVER (PARTITION BY jour ORDER BY volume_jour DESC) AS rang_du_jour
FROM volumes
ORDER BY jour, rang_du_jour;
```

**Exécution sur Neon :**

```bash
psql "$DATABASE_URL" -f dql.sql
```

---

## 3. 🚀 Lancement du projet (pas-à-pas)

### ✅ Prérequis

| Outil | Version |
|---|---|
| Node.js | ≥ 18.17 |
| npm | ≥ 9 |
| Git | Dernière version |
| MetaMask | Extension navigateur |
| Compte Neon | [neon.tech](https://neon.tech/) (offre gratuite) |

### Étape 1 — Cloner le dépôt

```bash
git clone https://github.com/fz-hazem/EQUA.git
cd EQUA
```

### Étape 2 — Installer les dépendances

```bash
npm install
```

### Étape 3 — Configurer les variables d'environnement (`.env`)

**`apps/api/.env`** — Backend + Neon PostgreSQL Cloud

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require"
PORT=4000
```

**`apps/web/.env.local`** — Frontend

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_TOKEN_ADDRESS=0x...     # adresse du token ERC-20 déployé
NEXT_PUBLIC_ESCROW_ADDRESS=0x...    # adresse du contrat Escrow déployé
```

> ⚠️ Ne jamais commiter les fichiers `.env`.

### Étape 4 — Initialiser la base Neon (Prisma)

```bash
cd apps/api
npx prisma generate
npx prisma migrate dev --name init
cd ../..
```

### Étape 5 — Compiler et déployer les smart contracts

```bash
cd packages/contracts
npx hardhat compile
npx hardhat node                                          # Terminal dédié
npx hardhat run scripts/deploy.ts --network localhost     # Autre terminal
cd ../..
```

Reporter les adresses affichées dans `apps/web/.env.local`.

### Étape 6 — Démarrer l'application

```bash
npm run dev
```

| Service | URL |
|---|---|
| 🖥️ Frontend Next.js | http://localhost:3000 |
| ⚙️ API NestJS | http://localhost:4000 |

### Étape 7 — Exécuter le module DQL

```bash
psql "$DATABASE_URL" -f dql.sql
```

### ✔️ Vérification rapide

- [ ] `/` affiche la landing page
- [ ] `/dashboard` affiche le solde après connexion du wallet
- [ ] `/escrow` permet d'émettre puis de libérer un séquestre
- [ ] `/transactions` affiche l'historique
- [ ] `/kyc` ouvre le parcours Sandbox BCT-Lab
- [ ] `dql.sql` s'exécute sans erreur sur Neon

---

## 📋 Récapitulatif des livrables

| Exigence de l'évaluation | Statut | Section |
|---|:---:|---|
| Justification Next.js 14 (App Router) & NestJS | ✅ | [1. Choix des frameworks](#1--choix-des-frameworks) |
| 5 pages dynamiques du Frontend | ✅ | [2. Fonctionnalités](#2--fonctionnalités-développées) |
| Module DQL / SQL brut (`dql.sql`) | ✅ | [2. Fonctionnalités](#2--fonctionnalités-développées) |
| Guide de lancement (prérequis, `npm install`, `.env` Neon, `npm run dev`) | ✅ | [3. Lancement](#3--lancement-du-projet-pas-à-pas) |
| Monorepo Turborepo + Smart Contracts Hardhat | ✅ | [Présentation](#-présentation-du-projet) |

---

<div align="center">

**👤 Auteur : [@fz-hazem](https://github.com/fz-hazem)** · **EQUA** — *L'accès à la finance, équitable, rapide et universel.*

</div>
