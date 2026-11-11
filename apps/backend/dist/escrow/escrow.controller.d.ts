import { EscrowService } from './escrow.service';
export declare class CreateEscrowDto {
    client: string;
    amount: number;
    condition: string;
}
export declare class EscrowController {
    private readonly escrowService;
    constructor(escrowService: EscrowService);
    createEscrow(dto: CreateEscrowDto): Promise<{
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
