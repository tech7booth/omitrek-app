export type TGetUserAddressResponse = {
  data: Array<{
    _id: string;
    address: string;
    city: string;
    coordinate: Array<string>;
    country: string;
    isDefault: boolean;
    landMark: string;
    name: string;
    phone: number;
    pinCode: number;
    state: string;
  }>;
  msg: string;
  statusCode: number;
};
