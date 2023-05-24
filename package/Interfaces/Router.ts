export interface GetRequest {
  url: string;
  action?: () => void;
}

export interface RouterInput {
  [key: string]: GetRequest
}