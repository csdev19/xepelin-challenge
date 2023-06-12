import { UserSession } from 'apps/authentication/src/interfaces/user-sesion.interface';
import { Response } from 'libs/common/src/utils/interfaces/response.interface';
import { PersonEntity } from '../entities';
import { LoginResponse } from '../dtos/authentication/login/login.response';
import { DataResponse } from 'libs/common/src/utils/interfaces/data-response.interface';
import { HttpStatus } from '@nestjs/common';

export class LoginMapper {
  public static toClient(person: UserSession): DataResponse<UserSession> {
    return {
      message: 'Login successful.',
      payload: {
        _person: {
          email: person._person.email,
          id: person._person.id,
          names: person._person.names,
          surnames: person._person.surnames,
        },
      },
      code: HttpStatus.OK,
    };
  }

  public static toLoginMethod(person: PersonEntity): UserSession {
    return {
      _person: person,
    };
  }
}
