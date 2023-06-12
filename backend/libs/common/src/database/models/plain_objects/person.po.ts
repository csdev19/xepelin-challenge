import { Status } from 'libs/common/src/utils/enums/status.enum';

export class PersonPO {
  public names: string;

  public surnames: string;

  public email: string;

  password?: string;

  public status: Status;
}
