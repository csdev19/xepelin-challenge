import { Injectable } from '@nestjs/common';
import { AccountEntity } from 'libs/common/src/database';
import { CreateAccountRequest } from 'libs/common/src/database/models/dtos/accounts/create-account/create-account.request';
import { AccountRepository } from 'libs/common/src/database/models/repositories/account.repository';
import { Status } from 'libs/common/src/utils/enums/status.enum';

@Injectable()
export class AccountsService {
  constructor(private readonly accountRepository: AccountRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  getAccounts(personId: number): Promise<AccountEntity[]> {
    return this.accountRepository.getAccountsByPersonId(personId);
  }

  async createAccount(payload: CreateAccountRequest, personId: number) {
    if (!payload.balance) {
      payload.balance = 0;
    }

    const accountObj = {
      balance: payload.balance,
      name: payload.name,
      status: Status.ACTIVE,
      personId,
    };
    const account = await this.accountRepository.insertOrUpdate(accountObj);
    return account;
  }
}
