import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entities';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AccountPO } from '../plain_objects/account.po';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  create() {
    return [];
  }

  async insertOrUpdate(accountEntity: AccountPO): Promise<AccountEntity> {
    const account = new AccountEntity();
    account.balance = accountEntity.balance;
    account.name = accountEntity.name;
    account.status = accountEntity.status;
    account.personId = accountEntity.personId;

    return await this.accountRepository.save(accountEntity);
  }

  async getAccountsByPersonId(personId: number): Promise<AccountEntity[]> {
    return await this.accountRepository.find({
      where: { personId },
    });
  }
}
