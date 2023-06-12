import * as TABLE from '../entities';

/**
 * @ToDo Asignar a cada microservicio solo las tablas que usan.
 **/
export const ALL_TABLES = [
  TABLE.AccountEntity,
  TABLE.PersonEntity,
  TABLE.TransactionEntity,
];

export const AUTHENTICATION_TABLES = [TABLE.PersonEntity];

export const ACCOUNT_TABLES = [TABLE.AccountEntity];

export const TRANSACTION_TABLES = [TABLE.TransactionEntity];
