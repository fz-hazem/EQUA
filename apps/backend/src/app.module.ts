import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { TransfersModule } from './transfers/transfers.module';
import { EscrowModule } from './escrow/escrow.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    PrismaModule,
    BlockchainModule,
    TransfersModule,
    EscrowModule,
    DashboardModule,
  ],
})
export class AppModule {}