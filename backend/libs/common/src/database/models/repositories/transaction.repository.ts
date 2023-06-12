import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from '../entities';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TransactionPO } from '../plain_objects/transaction.po';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  async insertOrUpdate(
    transactionEntity: TransactionPO,
  ): Promise<TransactionEntity> {
    const transaction = new TransactionEntity();
    transaction.amount = transactionEntity.amount;
    transaction.type = transactionEntity.type;
    transaction.accountId = transactionEntity.accountId;

    return await this.transactionRepository.save(transaction);
  }
}
