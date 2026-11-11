import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class KycGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userWallet = request.headers['x-wallet-address'];

    if (!userWallet) {
      throw new ForbiddenException("Adresse de portefeuille absente de l'en-tête.");
    }

    const user = await this.prisma.user.findUnique({
      where: { walletAddress: userWallet.toString().toLowerCase() },
    });

    if (!user || user.kycStatus !== 'APPROVED') {
      throw new ForbiddenException("Accès refusé : Vérification KYC non approuvée pour la Sandbox BCT.");
    }

    request.user = user;
    return true;
  }
}
