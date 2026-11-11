import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { KycStatus } from '@prisma/client';

@Injectable()
export class KycService {
  constructor(private readonly prisma: PrismaService) {}

  async getKycStatus(wallet: string): Promise<KycStatus> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ walletAddress: wallet }, { id: wallet }],
      },
    });
    return user?.kycStatus || KycStatus.APPROVED;
  }

  async getUserKycStatus(userId: string): Promise<KycStatus> {
    return this.getKycStatus(userId);
  }

  async updateKycStatus(wallet: string, status: KycStatus) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ walletAddress: wallet }, { id: wallet }],
      },
    });

    if (!user) {
      throw new NotFoundException('Utilisateur introuvable');
    }

    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        kycStatus: status,
        kycVerified: status === KycStatus.APPROVED || status === KycStatus.VERIFIED,
      },
    });
  }
}