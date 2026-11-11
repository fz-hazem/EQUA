import { PrismaService } from '../../prisma/prisma.service';
import { KycStatus } from '@prisma/client';
export declare class KycService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getKycStatus(wallet: string): Promise<KycStatus>;
    getUserKycStatus(userId: string): Promise<KycStatus>;
    updateKycStatus(wallet: string, status: KycStatus): Promise<{
        id: string;
        email: string | null;
        handle: string | null;
        walletAddress: string | null;
        passwordHash: string | null;
        kycVerified: boolean;
        kycStatus: import(".prisma/client").$Enums.KycStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
