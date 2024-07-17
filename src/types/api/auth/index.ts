export type TLoginResponse = {
  statusCode: number;
  msg: string;
  data: {
    user: {
      name: string;
      role: string;
    };
    token: string;
    expiresAt: number;
  };
};

export type TGetUserInfoResponse = {
  statusCode: number;
  msg: string;
  data: {
    _id: string;
    name: string;
    phone: number;
    role: string;
    password: string;
    referralCode: string;
    omniCoin: number;
    earning: number;
    balance: number;
    balance2: number;
    balance50: number;
    registrationDate: string;
    receivedCoins: Array<any>;
    sentCoins: Array<any>;
    cart: Array<any>;
    __v: number;
  };
};
