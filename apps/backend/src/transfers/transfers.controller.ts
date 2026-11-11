import { Controller, Post, Body } from '@nestjs/common';
import { TransfersService } from './transfers.service';

export class CreateTransferDto {
  recipient: string;
  amount: number;
}

@Controller('api/v1/transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Post('p2p')
  async createP2P(@Body() dto: CreateTransferDto) {
    return this.transfersService.processP2PTransfer(dto.recipient, dto.amount);
  }
}