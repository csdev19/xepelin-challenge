import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from '../entities/person.entity';

@Injectable()
export class PersonRepository {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
  ) {}

  public async getByEmail(email: string) {
    return await this.personRepository
      .createQueryBuilder('persons')
      .where('persons.email = :email', { email })
      .addSelect('persons.password')
      .getOne();
  }

  async insertOrUpdate(personEntity: PersonEntity): Promise<PersonEntity> {
    return await this.personRepository.save(personEntity);
  }

  // async list(): Promise<ClientEntity[]> {
  //   return await this.clientRepository
  //     .createQueryBuilder('clients')
  //     .innerJoinAndSelect('clients._person', 'persons')
  //     .innerJoinAndSelect('clients._register_store', 'stores_1')
  //     .innerJoinAndSelect('clients._favorite_store', 'stores_2')
  //     .innerJoinAndSelect('persons._ubigeo', 'ubigeos')
  //     .innerJoinAndSelect('persons._document', 'documents')
  //     .getMany();
  // }
}
