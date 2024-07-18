import EncryptedStorage from 'react-native-encrypted-storage';
import ApiService from './ApiService';
import {AUTH_TOKENS_KEY} from '@app/constants/keys';
import {TGetUserInfoResponse, TLoginResponse} from '@app/types/api/auth';

class AuthService extends ApiService {
  /**
   * Register a new user
   */
  async createNewAccount(
    name: string,
    phone: string,
    password: string,
    referCode?: string,
  ) {
    try {
      /** NOTE: Login and Register endpoints returns same payload data */
      const response = await this.api.post<TLoginResponse>('/v/register', {
        phone: +phone,
        name,
        password,
        referredBy: referCode ?? '',
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  /**
   * Phone No and Password based login
   */
  async loginWithPhoneAndPassword(phone: string, password: string) {
    try {
      const response = await this.api.post<TLoginResponse>('/v/login', {
        phone: +phone,
        password,
      });

      await EncryptedStorage.setItem(
        AUTH_TOKENS_KEY,
        JSON.stringify({token: response.data.data.token}),
      );

      return await this.getLoggedInUserInfo();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Get cuurently loggedin user information
   */
  async getLoggedInUserInfo() {
    try {
      const userInfo = await this.api.get<TGetUserInfoResponse>(
        '/v1/user-info',
      );
      return userInfo.data;
    } catch (e) {
      throw e;
    }
  }

  /**
   * Log out current user
   */
  async deleteUserSession() {
    try {
      await EncryptedStorage.removeItem(AUTH_TOKENS_KEY);
    } catch (e) {
      throw e;
    }
  }
}

const authService = new AuthService();
export default authService;
