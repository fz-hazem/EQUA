"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
let DashboardController = class DashboardController {
    async getSummary(handle) {
        const userHandle = handle || '@hazem.equa';
        return {
            user: {
                handle: userHandle,
                kycStatus: 'VERIFIED',
                network: 'Polygon Amoy Testnet',
            },
            balances: {
                availableEQD: 2450.00,
                escrowLockedEQD: 800.00,
                monthlyVolumeEQD: 3400.00,
                parityRatio: '1 EQD = 1 TND',
            },
            activeEscrows: [
                {
                    id: '#ESC-8920',
                    title: 'Développement Module Payment API',
                    payer: userHandle,
                    beneficiary: '@ste.maghreb',
                    amount: 500.00,
                    progress: 75,
                    status: '75% Effectué',
                },
                {
                    id: '#ESC-7412',
                    title: 'Audit Conformité BCT Regulatory Sandbox',
                    payer: userHandle,
                    beneficiary: '@freelance_tn',
                    amount: 300.00,
                    progress: 50,
                    status: 'En Attente Validation',
                },
            ],
            recentTransactions: [
                {
                    id: 'tx-1',
                    type: 'p2p_received',
                    title: 'Reçu de @salim.dev',
                    date: "Aujourd'hui • 14:32",
                    amount: '+ 150.00 EQD',
                    isPositive: true,
                    category: 'p2p',
                    hash: '0x8f92a4b1...e91',
                    status: 'Confirmé',
                },
                {
                    id: 'tx-2',
                    type: 'escrow_created',
                    title: 'Escrow Créé vers @ste.maghreb',
                    date: 'Hier • 09:15',
                    amount: '- 500.00 EQD',
                    isPositive: false,
                    category: 'escrow',
                    hash: '0x3c11f7a2...b40',
                    status: 'Bloqué en Smart Contract',
                },
            ],
        };
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('summary'),
    __param(0, (0, common_1.Query)('handle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getSummary", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('api/v1/dashboard')
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map