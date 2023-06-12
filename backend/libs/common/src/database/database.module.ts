import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import {
  AccountEntity,
  PersonEntity,
  TransactionEntity,
} from './models/entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const dbConfig = {
          type: 'postgres',
          host: configService.get<string>('PG_HOST'),
          port: configService.get<number>('PG_PORT'),
          username: configService.get<string>('PG_USER'),
          password: configService.get<string>('PG_PASSWORD'),
          database: configService.get<string>('PG_DB'),
          entities: [PersonEntity, TransactionEntity, AccountEntity],
          synchronize: true,
          autoLoadEntities: true,
          namingStrategy: new SnakeNamingStrategy(),
        } as TypeOrmModuleOptions;
        return dbConfig;
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
