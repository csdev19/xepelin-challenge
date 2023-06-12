import { AccountEntity } from './account.entity';
import { PersonEntity } from './person.entity';
import { TransactionEntity } from './transaction.entity';

export * from './account.entity';
export * from './person.entity';
export * from './transaction.entity';

export const ENTITIES = [PersonEntity, AccountEntity, TransactionEntity];
