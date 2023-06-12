export interface VoidResponse {
  message: string;
}

export interface Response<T> extends VoidResponse {
  payload: T;
}
