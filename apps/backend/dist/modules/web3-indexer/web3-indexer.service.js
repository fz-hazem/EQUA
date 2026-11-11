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
var Web3IndexerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3IndexerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let Web3IndexerService = Web3IndexerService_1 = class Web3IndexerService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(Web3IndexerService_1.name);
    }
    async indexTransaction(txHash, senderUser, formattedAmount) {
        this.logger.log(`Indexing transaction ${txHash} for user ${senderUser.id}`);
        const numericAmount = parseFloat(formattedAmount);
        return await this.prisma.transactionLog.upsert({
            where: { txHash },
            update: {
                userId: senderUser.id,
                amount: isNaN(numericAmount) ? 0 : numericAmount,
                status: 'CONFIRMED',
            },
            create: {
                txHash,
                userId: senderUser.id,
                amount: isNaN(numericAmount) ? 0 : numericAmount,
                status: 'CONFIRMED',
            },
        });
    }
};
exports.Web3IndexerService = Web3IndexerService;
exports.Web3IndexerService = Web3IndexerService = Web3IndexerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], Web3IndexerService);
//# sourceMappingURL=web3-indexer.service.js.map