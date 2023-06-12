import { Module, forwardRef } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { configuration } from 'libs/common/src/config';
import { DatabaseModule } from 'libs/common/src/database/database.module';
import { RedisModule } from 'libs/common/src';
import { PersonRepository } from 'libs/common/src/database/models/repositories/person.repository';
import { AccountEntity, PersonEntity } from 'libs/common/src/database';
import { Transaction } from 'typeorm';
// import { AuthModule as AuthModuleLib } from '@app/common';
import { AuthenticationModule as AuthenticationLibModule } from 'libs/common/src/authentication/authentication.module';
import { RmqModule } from 'libs/common/src/rmq/rmq.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    RedisModule,
    RmqModule,
    TypeOrmModule.forFeature([PersonEntity]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        // secret: 'secret',
        secret: configService.get<string>('jwt.secret'),
      }),
      inject: [ConfigService],
    }),
    AuthenticationLibModule,
  ],
  controllers: [AuthenticationController],
  providers: [JwtStrategy, AuthenticationService, PersonRepository],
})
export class AuthenticationModule {}
