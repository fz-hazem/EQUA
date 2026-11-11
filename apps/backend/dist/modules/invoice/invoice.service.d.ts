import { PrismaService } from '../../prisma/prisma.service';
export declare class InvoiceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createInvoice(issuerWallet: string, amount: number, description?: string): Promise<{
        id: string;
        amount: number;
        description: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        issuerId: string;
    }>;
    getUserInvoices(wallet: string): Promise<{
        id: string;
        amount: number;
        description: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        issuerId: string;
    }[]>;
}
