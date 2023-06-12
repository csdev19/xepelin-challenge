import { ApiProperty } from '@nestjs/swagger';
import { TransactionTypes } from 'libs/common/src/utils/enums/transactions-types.enum';

export class CreateTransactionRequest {
  @ApiProperty()
  amount: number;

  @ApiProperty()
  type: TransactionTypes;

  @ApiProperty()
  accountId: number;
}
