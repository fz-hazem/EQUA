import { PrismaService } from '../prisma/prisma.service';
import { BlockchainService } from '../blockchain/blockchain.service';
export declare class EscrowService {
    private prisma;
    private blockchain;
    constructor(prisma: PrismaService, blockchain: BlockchainService);
    createEscrowContract(clientHandle: string, amount: number, condition: string): Promise<{
        success: boolean;
        contractId: string;
        contractTxHash: string;
        client: string;
        amount: number;
        condition: string;
        status: string;
        progress: number;
        createdAt: string;
    }>;
}
