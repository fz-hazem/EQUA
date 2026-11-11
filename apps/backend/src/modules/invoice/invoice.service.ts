import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async createInvoice(issuerWallet: string, amount: number, description?: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ walletAddress: issuerWallet }, { id: issuerWallet }],
      },
    });

    if (!user) throw new NotFoundException('Émetteur non trouvé');

    return this.prisma.invoice.create({
      data: {
        issuerId: user.id,
        amount,
        description,
      },
    });
  }

  async getUserInvoices(wallet: string) {
    return this.prisma.invoice.findMany({
      where: {
        issuer: {
          OR: [{ walletAddress: wallet }, { id: wallet }],
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}