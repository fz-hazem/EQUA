import { PrismaService } from '../../prisma/prisma.service';
export declare class Web3IndexerService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    indexTransaction(txHash: string, senderUser: {
        id: string;
    }, formattedAmount: string): Promise<{
        id: string;
        txHash: string;
        userId: string | null;
        amount: number | null;
        status: string;
        data: string | null;
        createdAt: Date;
    }>;
}
