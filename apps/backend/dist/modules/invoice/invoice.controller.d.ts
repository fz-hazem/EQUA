import { InvoiceService } from './invoice.service';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    createInvoice(body: {
        issuerWallet: string;
        amount: number;
    }): Promise<{
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
