export abstract class IHttpService {
  get(url: string, config?: RequestConfig): any {};
  post(url: string, data: any, config?: RequestConfig): any {};
  put(url: string, data: any, config?: RequestConfig): any {};
  delete(url: string, config?: RequestConfig): any {};
}

type RequestConfig = RequestInit;