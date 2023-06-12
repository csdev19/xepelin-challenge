import { ApiProperty } from '@nestjs/swagger';
import { Status } from 'libs/common/src/utils/enums/status.enum';

export class CreateAccountRequest {
  @ApiProperty()
  balance?: number;

  @ApiProperty()
  name: string;
}
