import { ApiProperty } from '@nestjs/swagger';
import { UserSession } from 'apps/authentication/src/interfaces/user-sesion.interface';
import { PersonPO } from '../../../plain_objects/person.po';

// class PersonLoginResource implements Omit<PersonPO, 'status'> {
//   @ApiProperty()
//   id: number;

//   @ApiProperty()
//   names: string;

//   @ApiProperty()
//   surnames: string;

//   @ApiProperty()
//   email: string;
// }

// export class LoginResponse {
//   @ApiProperty()
//   _person: PersonLoginResource;

//   public static item(model: UserSession): LoginResponse {
//     return {
//       _person: {
//         id: model._person.id,
//         names: model._person.names,
//         surnames: model._person.surnames,
//         email: model._person.email,
//       },
//     };
//   }
// }
export interface LoginResponse {
  _person: {
    id: number;
    names: string;
    surnames: string;
    email: string;
  };
}
