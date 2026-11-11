import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { KycGuard } from '../../common/guards/kyc.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('validate-transfer')
  @UseGuards(KycGuard)
  async validateTransfer(@Body() body: { senderWallet: string; recipientWallet: string; amount: number }) {
    return this.paymentService.validateAndPrepareTransfer(body.senderWallet, body.recipientWallet, body.amount);
  }
}
