import { Injectable } from '@nestjs/common';
import { CreatePersonDTO } from 'libs/common/src/database/models/dtos/person/CreatePerson.dto';
import { PersonRepository } from 'libs/common/src/database/models/repositories/person.repository';
import * as bcrypt from 'bcrypt';
import { PersonEntity } from 'libs/common/src/database';

const saltOrRounds = 10;

@Injectable()
export class PersonsService {
  constructor(private readonly personRepository: PersonRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createPerson(payload: CreatePersonDTO) {
    const hashPassword = await bcrypt.hash(payload.password, saltOrRounds);
    const person = await this.personRepository.insertOrUpdate({
      ...payload,
      password: hashPassword,
    } as PersonEntity);
    return person.id;
  }
}
