import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { KycStatus } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(private readonly prisma: PrismaService) {}

  async validateAndPrepareTransfer(
    senderWallet: string,
    recipientWallet: string,
    amount: number,
  ) {
    if (amount <= 0) {
      throw new BadRequestException('Le montant doit être supérieur à 0');
    }

    const sender = await this.prisma.user.findFirst({
      where: { OR: [{ walletAddress: senderWallet }, { id: senderWallet }] },
    });

    const recipient = await this.prisma.user.findFirst({
      where: { OR: [{ walletAddress: recipientWallet }, { id: recipientWallet }] },
    });

    if (!sender) {
      throw new NotFoundException('Expéditeur introuvable');
    }
    if (!recipient) {
      throw new NotFoundException('Destinataire introuvable');
    }

    if (
      recipient.kycStatus !== KycStatus.APPROVED &&
      recipient.kycStatus !== KycStatus.VERIFIED
    ) {
      throw new BadRequestException('Le destinataire doit être vérifié KYC (APPROVED/VERIFIED)');
    }

    return {
      valid: true,
      senderId: sender.id,
      recipientId: recipient.id,
      amount,
      fee: 0.001,
    };
  }
}