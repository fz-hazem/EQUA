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
exports.TransfersController = exports.CreateTransferDto = void 0;
const common_1 = require("@nestjs/common");
const transfers_service_1 = require("./transfers.service");
class CreateTransferDto {
}
exports.CreateTransferDto = CreateTransferDto;
let TransfersController = class TransfersController {
    constructor(transfersService) {
        this.transfersService = transfersService;
    }
    async createP2P(dto) {
        return this.transfersService.processP2PTransfer(dto.recipient, dto.amount);
    }
};
exports.TransfersController = TransfersController;
__decorate([
    (0, common_1.Post)('p2p'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTransferDto]),
    __metadata("design:returntype", Promise)
], TransfersController.prototype, "createP2P", null);
exports.TransfersController = TransfersController = __decorate([
    (0, common_1.Controller)('api/v1/transfers'),
    __metadata("design:paramtypes", [transfers_service_1.TransfersService])
], TransfersController);
//# sourceMappingURL=transfers.controller.js.map