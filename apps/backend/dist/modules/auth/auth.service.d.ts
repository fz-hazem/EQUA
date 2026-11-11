import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(email: string, walletAddress: string): Promise<{
        user: {
            id: string;
            email: string | null;
            handle: string | null;
            passwordHash: string | null;
            walletAddress: string | null;
            kycVerified: boolean;
            kycStatus: import(".prisma/client").$Enums.KycStatus;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
    }>;
}
