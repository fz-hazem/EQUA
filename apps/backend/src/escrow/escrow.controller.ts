import { Controller, Post, Body } from '@nestjs/common';
import { EscrowService } from './escrow.service';

export class CreateEscrowDto {
  client: string;
  amount: number;
  condition: string;
}

@Controller('api/v1/escrow')
export class EscrowController {
  constructor(private readonly escrowService: EscrowService) {}

  @Post('create')
  async createEscrow(@Body() dto: CreateEscrowDto) {
    return this.escrowService.createEscrowContract(dto.client, dto.amount, dto.condition);
  }
}