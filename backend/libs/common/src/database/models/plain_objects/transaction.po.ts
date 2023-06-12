import { Status } from 'libs/common/src/utils/enums/status.enum';
import { TransactionTypes } from 'libs/common/src/utils/enums/transactions-types.enum';

export class TransactionPO {
  // public name: string;
  // public status: Status;
  public type: TransactionTypes;
  public amount: number;
  public accountId: number;
}
