import { environment } from "@/environments/environment";
import { AuthenticationService } from "./authentication.service";
import { AccountService } from "./account.service";
// import { FetchHttpService } from "./fetch-http-service";
import { AxiosHttpService } from "./axios-http-service";
import { LocalStorageService } from "./local-storage.service";
import { TransactionService } from "./transaction.service";

// const httpService = new FetchHttpService();
const httpService = new AxiosHttpService();

export const authenticationService = new AuthenticationService(httpService);
export const accountsService = new AccountService(httpService);
export const transactionService = new TransactionService(httpService);

export const localStorageService = new LocalStorageService();
