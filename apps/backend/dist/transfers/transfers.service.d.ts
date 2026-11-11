import { PrismaService } from '../prisma/prisma.service';
import { BlockchainService } from '../blockchain/blockchain.service';
export declare class TransfersService {
    private prisma;
    private blockchain;
    constructor(prisma: PrismaService, blockchain: BlockchainService);
    processP2PTransfer(recipientInput: string, amount: number): Promise<{
        success: boolean;
        message: string;
        txHash: string;
        recipient: string;
        amount: number;
        fee: number;
        timestamp: string;
    }>;
}
