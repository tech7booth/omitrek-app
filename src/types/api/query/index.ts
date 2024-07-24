export type TSearchProductResponse = {
  statusCode: number;
  msg: string;
  data: Array<{
    _id: string;
    name: string;
    description: string;
    mrp: number;
    sp: number;
    discount: number;
    image: string;
  }>;
};

export type TProductInfo = {
  statusCode: number;
  msg: string;
  data: {
    uploadedFrom: {
      coordinates: Array<number>;
      type: string;
    };
    _id: string;
    shop: string;
    name: string;
    description: string;
    category: string;
    mrp: number;
    sp: number;
    discount: number;
    images: Array<string>;
    variants: Array<{
      color: {
        name: string;
        code: string;
      };
      sku: string;
      size: string;
      mrp: number;
      sp: number;
      discount: number;
      images: Array<string>;
      _id: string;
    }>;
    quantity: number;
    ratting: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};
