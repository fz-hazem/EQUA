import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BlockchainService } from '../blockchain/blockchain.service';

@Injectable()
export class EscrowService {
  constructor(
    private prisma: PrismaService,
    private blockchain: BlockchainService,
  ) {}

  async createEscrowContract(clientHandle: string, amount: number, condition: string) {
    if (amount <= 0) {
      throw new BadRequestException('Le montant sous séquestre doit être valide');
    }

    const contractTxHash = await this.blockchain.createEscrowContract(
      '0xUserPayer',
      clientHandle,
      amount,
    );

    return {
      success: true,
      contractId: `#ESC-${Math.floor(1000 + Math.random() * 9000)}`,
      contractTxHash,
      client: clientHandle,
      amount,
      condition,
      status: 'IN_PROGRESS',
      progress: 25,
      createdAt: new Date().toISOString(),
    };
  }
}