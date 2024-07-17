import {AUTH_TOKENS_KEY} from '@app/constants/keys';
import axios from 'axios';
import dayjs from 'dayjs';
import {jwtDecode} from 'jwt-decode';
import EncryptedStorage from 'react-native-encrypted-storage';

type TAuthTokens = {
  token: string;
};

type TDecodedTokenInfo = {
  exp: number;
  iat: number;
  name: string;
  role: string;
  shopId: string;
  userId: string;
};

class ApiService {
  protected baseURL = 'https://omitrek-backend.vercel.app/api';
  protected api = axios.create({
    baseURL: this.baseURL,
  });

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.api.interceptors.request.use(async request => {
      const authTokens = await EncryptedStorage.getItem(AUTH_TOKENS_KEY);

      if (!authTokens) {
        return request;
      }

      const parsedToken: TAuthTokens = JSON.parse(authTokens);

      try {
        const decodedData = jwtDecode<TDecodedTokenInfo>(parsedToken.token);
        const isExpired = dayjs.unix(decodedData.exp).diff(dayjs()) < 1;
        if (!isExpired) {
          /** NOTE: Adding `Bearer {token}` won't work beacause that's how backend is designed */
          request.headers.Authorization = parsedToken.token;
        }

        /* ...Future code for refresh token rotation for persistent user login
         * currently refresh token route isn't available that's why after token
         * expiration user have to login
         */
      } catch (e) {
        // ...ignore
      }

      return request;
    });
  }
}

export default ApiService;
