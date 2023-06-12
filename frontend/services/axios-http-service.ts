import { IHttpService } from "@/types/http/base-http.types";
import axios, { AxiosStatic } from "axios";

export class AxiosHttpService implements IHttpService {
  axios: AxiosStatic;
  constructor() {
    this.axios = axios;
  }

  async get(url: string, config: any) {
    try {
      const response = await axios.get(`${url}`, {
        withCredentials: true,
      });
      const result = await response.data;
      return result;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  async post(url: string, data: any) {
    try {
      const response = await axios.post(`${url}`, data, {
        withCredentials: true,
      });
      const result = await response.data;
      return result;
    } catch (error) {
      this.errorHandler(error);
    }
  }

  async put(url: string, data: any, config: any) {}

  async delete(url: string, config: any) {}

  private async errorHandler(error: any) {
    console.log('error => ', error);
    // to do: handle error
    throw error;
  }
}