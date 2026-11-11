export declare class DashboardController {
    getSummary(handle: string): Promise<{
        user: {
            handle: string;
            kycStatus: string;
            network: string;
        };
        balances: {
            availableEQD: number;
            escrowLockedEQD: number;
            monthlyVolumeEQD: number;
            parityRatio: string;
        };
        activeEscrows: {
            id: string;
            title: string;
            payer: string;
            beneficiary: string;
            amount: number;
            progress: number;
            status: string;
        }[];
        recentTransactions: {
            id: string;
            type: string;
            title: string;
            date: string;
            amount: string;
            isPositive: boolean;
            category: string;
            hash: string;
            status: string;
        }[];
    }>;
}
