import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from 'libs/common/src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'libs/common/src';
import { AccountRepository } from 'libs/common/src/database/models/repositories/account.repository';
import { JwtModule } from '@nestjs/jwt';
import { AccountEntity } from 'libs/common/src/database';
import { configuration } from 'libs/common/src/config';
import { AuthenticationModule } from 'libs/common/src/authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    RedisModule,
    TypeOrmModule.forFeature([AccountEntity]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
      }),
      inject: [ConfigService],
    }),
    AuthenticationModule,
  ],
  controllers: [AccountsController],
  providers: [AccountsService, AccountRepository],
})
export class AccountsModule {}
