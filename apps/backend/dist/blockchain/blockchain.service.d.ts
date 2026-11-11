export declare class BlockchainService {
    private readonly logger;
    private provider;
    constructor();
    executeP2PTransfer(senderWallet: string, recipientWallet: string, amount: number): Promise<string>;
    createEscrowContract(payerWallet: string, beneficiaryWallet: string, amount: number): Promise<string>;
}
