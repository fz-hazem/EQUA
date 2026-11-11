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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransfersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const blockchain_service_1 = require("../blockchain/blockchain.service");
let TransfersService = class TransfersService {
    constructor(prisma, blockchain) {
        this.prisma = prisma;
        this.blockchain = blockchain;
    }
    async processP2PTransfer(recipientInput, amount) {
        if (amount <= 0) {
            throw new common_1.BadRequestException('Le montant doit être supérieur à 0 EQD');
        }
        const formattedHandle = recipientInput.startsWith('@') ? recipientInput : `@${recipientInput}`;
        let recipient = await this.prisma.user.findFirst({
            where: {
                OR: [{ handle: formattedHandle }, { email: recipientInput }],
            },
        });
        if (!recipient) {
            recipient = await this.prisma.user.create({
                data: {
                    email: `${recipientInput.replace('@', '')}@equa.tn`,
                    handle: formattedHandle,
                    walletAddress: `0x${Math.random().toString(16).substring(2, 12)}`,
                },
            });
        }
        const txHash = await this.blockchain.executeP2PTransfer('0xCurrentUserWallet', recipient.walletAddress, amount);
        return {
            success: true,
            message: `Virement de ${amount} EQD envoyé avec succès à ${recipient.handle}`,
            txHash,
            recipient: recipient.handle,
            amount,
            fee: 0.001,
            timestamp: new Date().toISOString(),
        };
    }
};
exports.TransfersService = TransfersService;
exports.TransfersService = TransfersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        blockchain_service_1.BlockchainService])
], TransfersService);
//# sourceMappingURL=transfers.service.js.map