import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { KycService } from './kyc.service';
import { KycStatus } from '@prisma/client';

@Controller('kyc')
export class KycController {
  constructor(private readonly kycService: KycService) {}

  @Get('status/:wallet')
  async getStatus(@Param('wallet') wallet: string) {
    return this.kycService.getKycStatus(wallet);
  }

  @Patch('update')
  async updateStatus(@Body() body: { wallet: string; status: KycStatus }) {
    return this.kycService.updateKycStatus(body.wallet, body.status);
  }
}
