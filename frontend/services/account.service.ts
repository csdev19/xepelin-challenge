import { environment } from "@/environments/environment";
import { CreateAccountRequest } from "@/types/account/account.types";
import { IHttpService } from "@/types/http/base-http.types";

export class AccountService {
  private baseUrl: string;

  constructor(private httpService: IHttpService) {
    this.baseUrl = environment.accountsApi;
  }

  // public async getAccounts() {
  //   return this.httpService.get(`${this.baseUrl}/accounts`);
  // }

  // public async getAccount({ id }: { id: number }) {
  //   return this.httpService.get(`${this.baseUrl}/accounts/${id}`);
  // }

  public async createAccount({ balance, name }: CreateAccountRequest) {
    return this.httpService.post(`${this.baseUrl}/accounts`, { balance, name });
  }

  public async getAccounts() {
    return this.httpService.get(`${this.baseUrl}/accounts`);
  }

  // public async updateAccount({ id, account }: { id: number; account: any }) {
  //   return this.httpService.put(`${this.baseUrl}/accounts/${id}`, account);
  // }

  // public async deleteAccount({ id }: { id: number }) {
  //   return this.httpService.delete(`${this.baseUrl}/accounts/${id}`);
  // }
}