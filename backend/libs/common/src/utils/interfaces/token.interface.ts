export interface Token {
  payload: {
    personId: number;
    email: string;
  };
  iat: number;
  exp: number;
  iss: string;
  jti: string;
}
