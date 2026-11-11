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
var BlockchainService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
let BlockchainService = BlockchainService_1 = class BlockchainService {
    constructor() {
        this.logger = new common_1.Logger(BlockchainService_1.name);
        const rpcUrl = process.env.POLYGON_AMOY_RPC || 'https://rpc-amoy.polygon.technology';
        this.provider = new ethers_1.ethers.JsonRpcProvider(rpcUrl);
    }
    async executeP2PTransfer(senderWallet, recipientWallet, amount) {
        this.logger.log(`Executing P2P Transfer: ${amount} EQD from ${senderWallet} to ${recipientWallet}`);
        return `0x${Math.random().toString(16).substring(2, 10)}${Math.random().toString(16).substring(2, 10)}...amoy`;
    }
    async createEscrowContract(payerWallet, beneficiaryWallet, amount) {
        this.logger.log(`Locking Escrow Funds: ${amount} EQD for ${beneficiaryWallet}`);
        return `0xescrow_${Math.random().toString(16).substring(2, 10)}`;
    }
};
exports.BlockchainService = BlockchainService;
exports.BlockchainService = BlockchainService = BlockchainService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BlockchainService);
//# sourceMappingURL=blockchain.service.js.map