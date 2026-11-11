import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, walletAddress: string) {
    const normalizedWallet = walletAddress.toLowerCase();
    
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email }, { walletAddress: normalizedWallet }] },
    });

    if (existing) {
      throw new ConflictException("Utilisateur ou portefeuille déjà enregistré.");
    }

    const user = await this.prisma.user.create({
      data: {
        email,
        walletAddress: normalizedWallet,
        kycStatus: 'APPROVED', // Par défaut APPROVED pour démonstration PoC / Sandbox
      },
    });

    const token = this.jwtService.sign({ sub: user.id, wallet: user.walletAddress });
    return { user, accessToken: token };
  }
}
