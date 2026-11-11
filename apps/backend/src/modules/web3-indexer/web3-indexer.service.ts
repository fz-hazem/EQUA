import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class Web3IndexerService {
  private readonly logger = new Logger(Web3IndexerService.name);

  constructor(private readonly prisma: PrismaService) {}

  async indexTransaction(txHash: string, senderUser: { id: string }, formattedAmount: string) {
    this.logger.log(`Indexing transaction ${txHash} for user ${senderUser.id}`);

    const numericAmount = parseFloat(formattedAmount);

    return await this.prisma.transactionLog.upsert({
      where: { txHash },
      update: {
        userId: senderUser.id,
        amount: isNaN(numericAmount) ? 0 : numericAmount,
        status: 'CONFIRMED',
      },
      create: {
        txHash,
        userId: senderUser.id,
        amount: isNaN(numericAmount) ? 0 : numericAmount,
        status: 'CONFIRMED',
      },
    });
  }
}