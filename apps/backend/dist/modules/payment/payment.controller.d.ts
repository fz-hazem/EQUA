import { PaymentService } from './payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    validateTransfer(body: {
        senderWallet: string;
        recipientWallet: string;
        amount: number;
    }): Promise<{
        valid: boolean;
        senderId: string;
        recipientId: string;
        amount: number;
        fee: number;
    }>;
}
