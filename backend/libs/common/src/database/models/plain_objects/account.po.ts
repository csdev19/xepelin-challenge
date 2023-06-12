import { Status } from 'libs/common/src/utils/enums/status.enum';

export class AccountPO {
  public balance: number;
  public name: string;
  public status: Status;
  public personId: number;
}
