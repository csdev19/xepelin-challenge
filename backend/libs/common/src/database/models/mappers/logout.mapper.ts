import { VoidResponse } from 'libs/common/src/utils/interfaces/response.interface';

export class LogotMapper {
  public static toClient(): VoidResponse {
    return {
      message: 'Logout successful.',
    };
  }
}
