import { environment } from "@/environments/environment";
import { IHttpService } from "@/types/http/base-http.types";
import { LoginRequest, LoginResponse } from "@/types/login/login.types";

export class AuthenticationService {
  private baseUrl: string;

  constructor(private httpService: IHttpService) {
    this.baseUrl = environment.authenticationApi;
  }

  public async login({ email, password }: LoginRequest): Promise<LoginResponse> {
    return this.httpService.post(`${this.baseUrl}/login`, { email, password }, { credentials: 'same-origin' });
  }

  public async logout() {}
}