import { ApiProperty } from '@nestjs/swagger';

export abstract class DataResponse<T> {
  @ApiProperty()
  public code: number;

  @ApiProperty()
  public message?: string;

  @ApiProperty()
  public payload: T;
}
