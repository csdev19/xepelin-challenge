import { Injectable } from '@nestjs/common';
import { TransactionPO } from 'libs/common/src/database/models/plain_objects/transaction.po';
import { TransactionRepository } from 'libs/common/src/database/models/repositories/transaction.repository';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createTransaction(payload: TransactionPO, accountId: number) {
    const transaction = {
      amount: payload.amount,
      type: payload.type,
      accountId,
    } as TransactionPO;
    return this.transactionRepository.insertOrUpdate(transaction);
  }
}
