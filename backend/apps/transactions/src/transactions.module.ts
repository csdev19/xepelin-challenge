import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'libs/common/src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TRANSACTION_TABLES } from 'libs/common/src/database/models/permissions/tables';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    TypeOrmModule.forFeature(TRANSACTION_TABLES),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
