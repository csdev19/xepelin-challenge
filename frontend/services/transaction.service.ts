import { environment } from "@/environments/environment";
import { IHttpService } from "@/types/http/base-http.types";

export class TransactionService {
  private baseUrl: string;

  constructor(private httpService: IHttpService) {
    this.baseUrl = environment.transactionsApi;
  }

  createTransaction({ amount, type, accountId }: { amount: number; type: number; accountId: number }) {
    return this.httpService.post(`${this.baseUrl}/transactions`, { amount, type, accountId });
  }
}