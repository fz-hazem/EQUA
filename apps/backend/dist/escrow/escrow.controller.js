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
exports.EscrowController = exports.CreateEscrowDto = void 0;
const common_1 = require("@nestjs/common");
const escrow_service_1 = require("./escrow.service");
class CreateEscrowDto {
}
exports.CreateEscrowDto = CreateEscrowDto;
let EscrowController = class EscrowController {
    constructor(escrowService) {
        this.escrowService = escrowService;
    }
    async createEscrow(dto) {
        return this.escrowService.createEscrowContract(dto.client, dto.amount, dto.condition);
    }
};
exports.EscrowController = EscrowController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEscrowDto]),
    __metadata("design:returntype", Promise)
], EscrowController.prototype, "createEscrow", null);
exports.EscrowController = EscrowController = __decorate([
    (0, common_1.Controller)('api/v1/escrow'),
    __metadata("design:paramtypes", [escrow_service_1.EscrowService])
], EscrowController);
//# sourceMappingURL=escrow.controller.js.map