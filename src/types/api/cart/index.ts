export type TCartItmesResponse = {
  statusCode: number;
  msg: string;
  data: Array<{
    product: string;
    size: string;
    quantity: number;
    _id: string;
  }>;
};
