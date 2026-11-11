import { KycService } from './kyc.service';
import { KycStatus } from '@prisma/client';
export declare class KycController {
    private readonly kycService;
    constructor(kycService: KycService);
    getStatus(wallet: string): Promise<import(".prisma/client").$Enums.KycStatus>;
    updateStatus(body: {
        wallet: string;
        status: KycStatus;
    }): Promise<{
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
