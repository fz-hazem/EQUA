import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BlockchainService } from '../blockchain/blockchain.service';

@Injectable()
export class TransfersService {
  constructor(
    private prisma: PrismaService,
    private blockchain: BlockchainService,
  ) {}

  async processP2PTransfer(recipientInput: string, amount: number) {
    if (amount <= 0) {
      throw new BadRequestException('Le montant doit être supérieur à 0 EQD');
    }

    const formattedHandle = recipientInput.startsWith('@') ? recipientInput : `@${recipientInput}`;

    // Recherche ou création à la volée pour la simulation Sandbox
    let recipient = await this.prisma.user.findFirst({
      where: {
        OR: [{ handle: formattedHandle }, { email: recipientInput }],
      },
    });

    if (!recipient) {
      recipient = await this.prisma.user.create({
        data: {
          email: `${recipientInput.replace('@', '')}@equa.tn`,
          handle: formattedHandle,
          walletAddress: `0x${Math.random().toString(16).substring(2, 12)}`,
        },
      });
    }

    // Execution sur la Blockchain Polygon Amoy
    const txHash = await this.blockchain.executeP2PTransfer(
      '0xCurrentUserWallet',
      recipient.walletAddress,
      amount,
    );

    return {
      success: true,
      message: `Virement de ${amount} EQD envoyé avec succès à ${recipient.handle}`,
      txHash,
      recipient: recipient.handle,
      amount,
      fee: 0.001,
      timestamp: new Date().toISOString(),
    };
  }
}