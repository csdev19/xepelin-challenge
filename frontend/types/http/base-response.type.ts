export interface BaseResponse<T> {
  payload: T;
  code: number;
  message: string;
}