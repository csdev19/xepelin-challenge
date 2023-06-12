import { BaseResponse } from "../http/base-response.type";

export type LoginResponse = BaseResponse<LoginPayload>;

export type LoginPayload = {
  _person: {
    id: number;
    names: string;
    surnames: string;
    email: string;
  }
};

export type LoginRequest = {
  email: string;
  password: string;
};