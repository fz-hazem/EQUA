import { TransfersService } from './transfers.service';
export declare class CreateTransferDto {
    recipient: string;
    amount: number;
}
export declare class TransfersController {
    private readonly transfersService;
    constructor(transfersService: TransfersService);
    createP2P(dto: CreateTransferDto): Promise<{
        success: boolean;
        message: string;
        txHash: string;
        recipient: string;
        amount: number;
        fee: number;
        timestamp: string;
    }>;
}
