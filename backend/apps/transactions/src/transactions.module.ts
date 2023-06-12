import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'libs/common/src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configuration } from 'libs/common/src/config';
import { RedisModule } from 'libs/common/src';
import { TransactionEntity } from 'libs/common/src/database';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationModule } from 'libs/common/src/authentication/authentication.module';
import { TransactionRepository } from 'libs/common/src/database/models/repositories/transaction.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    RedisModule,
    DatabaseModule,
    TypeOrmModule.forFeature([TransactionEntity]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
      }),
      inject: [ConfigService],
    }),
    AuthenticationModule,
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository],
})
export class TransactionsModule {}
