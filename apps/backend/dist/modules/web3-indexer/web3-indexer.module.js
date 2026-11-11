"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3IndexerModule = void 0;
const common_1 = require("@nestjs/common");
const web3_indexer_service_1 = require("./web3-indexer.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let Web3IndexerModule = class Web3IndexerModule {
};
exports.Web3IndexerModule = Web3IndexerModule;
exports.Web3IndexerModule = Web3IndexerModule = __decorate([
    (0, common_1.Module)({
        providers: [web3_indexer_service_1.Web3IndexerService, prisma_service_1.PrismaService],
    })
], Web3IndexerModule);
//# sourceMappingURL=web3-indexer.module.js.map