import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { PersonRepository } from 'libs/common/src/database/models/repositories/person.repository';
import { DatabaseModule } from 'libs/common/src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from 'libs/common/src/database';
import { configuration } from 'libs/common/src/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    TypeOrmModule.forFeature([PersonEntity]),
  ],
  controllers: [PersonsController],
  providers: [PersonsService, PersonRepository],
})
export class PersonsModule {}
