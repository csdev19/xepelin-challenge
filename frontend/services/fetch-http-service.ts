import { IHttpService } from "@/types/http/base-http.types";

export class FetchHttpService implements IHttpService {
  constructor() {}

  async get(url: string, config: any) {
    try {
      const response = await fetch(`${url}`, {
        method: 'GET',
        ...config,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  async post(url: string, data: any, config?: RequestInit) {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const response = await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: myHeaders,
        ...config,
      });

      const result = await response.json();
      return result;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  async put(url: string, data: any, config: any) {
    try {
      const response = await fetch(`${url}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        ...config,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  async delete(url: string, config: any) {
    try {
      const response = await fetch(`${url}`, {
        method: 'DELETE',
        ...config,
      });
      const result = await response.json();
      return result;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  private async errorHandler(error: any) {
    console.log('error => ', error);
    // to do: handle error
  }
}
