import { Module } from '@nestjs/common';
import { Web3IndexerService } from './web3-indexer.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [Web3IndexerService, PrismaService],
})
export class Web3IndexerModule {}
