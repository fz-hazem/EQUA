import { PrismaService } from '../../prisma/prisma.service';
export declare class PaymentService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validateAndPrepareTransfer(senderWallet: string, recipientWallet: string, amount: number): Promise<{
        valid: boolean;
        senderId: string;
        recipientId: string;
        amount: number;
        fee: number;
    }>;
}
