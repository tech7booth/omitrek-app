export type TSearchProductsResponse = {
  statusCode: number;
  msg: string;
  data: Array<{
    _id: string;
    name: string;
    description: string;
    price: number;
    image: {
      url: string;
      _id: string;
    };
  }>;
};
