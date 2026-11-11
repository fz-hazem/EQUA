# EQUA — Equitable, Quick & Universal Access

Infrastructure de paiement numérique hybride (Web2 / Web3) conçue pour la Tunisie et conforme à la Sandbox BCT-Lab.

## Structure du Monorepo

- `apps/frontend` : Application Next.js 14 (App Router) + Wagmi / Viem / TailwindCSS.
- `apps/backend` : API REST NestJS + Prisma ORM + PostgreSQL + Module d'indexation Web3.
- `packages/blockchain` : Environnement Hardhat + Smart Contracts Solidity (ERC-20 & Escrow).
- `packages/shared-types` : Interfaces et DTOs TypeScript partagés.

## Installation & Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement (.env)
cp apps/backend/.env.example apps/backend/.env

# 3. Lancer les migrations Prisma
cd apps/backend && npx prisma migrate dev

# 4. Lancer l'environnement de développement complet (Monorepo)
npm run dev
```
