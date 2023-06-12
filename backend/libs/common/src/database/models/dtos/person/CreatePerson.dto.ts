import { Status } from 'libs/common/src/utils/enums/status.enum';
import { PersonPO } from '../../plain_objects/person.po';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePersonDTO implements PersonPO {
  @ApiProperty()
  @IsNotEmpty()
  public names: string;

  @ApiProperty()
  @IsNotEmpty()
  public surnames: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @ApiProperty()
  @IsNotEmpty()
  password?: string;

  @ApiProperty()
  @IsNotEmpty()
  public status: Status;
}
