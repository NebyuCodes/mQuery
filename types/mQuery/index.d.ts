export {};

declare global {
  interface RequestQuery {
    sort?: string;
    fields?: string;
    page?: number;
    limit?: number;
    [key: string]: any;
  }
}
