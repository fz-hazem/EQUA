import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        walletAddress: string;
    }): Promise<{
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
