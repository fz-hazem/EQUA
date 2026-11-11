import { Controller, Get, Query } from '@nestjs/common';

@Controller('api/v1/dashboard')
export class DashboardController {

  @Get('summary')
  async getSummary(@Query('handle') handle: string) {
    const userHandle = handle || '@hazem.equa';

    return {
      user: {
        handle: userHandle,
        kycStatus: 'VERIFIED',
        network: 'Polygon Amoy Testnet',
      },
      balances: {
        availableEQD: 2450.00,
        escrowLockedEQD: 800.00,
        monthlyVolumeEQD: 3400.00,
        parityRatio: '1 EQD = 1 TND',
      },
      activeEscrows: [
        {
          id: '#ESC-8920',
          title: 'Développement Module Payment API',
          payer: userHandle,
          beneficiary: '@ste.maghreb',
          amount: 500.00,
          progress: 75,
          status: '75% Effectué',
        },
        {
          id: '#ESC-7412',
          title: 'Audit Conformité BCT Regulatory Sandbox',
          payer: userHandle,
          beneficiary: '@freelance_tn',
          amount: 300.00,
          progress: 50,
          status: 'En Attente Validation',
        },
      ],
      recentTransactions: [
        {
          id: 'tx-1',
          type: 'p2p_received',
          title: 'Reçu de @salim.dev',
          date: "Aujourd'hui • 14:32",
          amount: '+ 150.00 EQD',
          isPositive: true,
          category: 'p2p',
          hash: '0x8f92a4b1...e91',
          status: 'Confirmé',
        },
        {
          id: 'tx-2',
          type: 'escrow_created',
          title: 'Escrow Créé vers @ste.maghreb',
          date: 'Hier • 09:15',
          amount: '- 500.00 EQD',
          isPositive: false,
          category: 'escrow',
          hash: '0x3c11f7a2...b40',
          status: 'Bloqué en Smart Contract',
        },
      ],
    };
  }
}