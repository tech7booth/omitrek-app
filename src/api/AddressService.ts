import {TUserAddress} from '@app/components/screens/StackScreens/CreateNewAddressScreen/UserDetailsFields';
import ApiService from './ApiService';
import {TGetUserAddressResponse} from '@app/types/api/address';

class AddressService extends ApiService {
  /**
   * Save User Address
   */
  async saveAddress(address: TUserAddress) {
    const response = await this.api.post('/v1/addresses', {
      name: address.name,
      phone: +address.mobile,
      address: address.address,
      landMark: address.landmark,
      city: address.city,
      state: address.state,
      pinCode: address.pincode,
      country: 'India',
    });
    return response.data;
  }

  /**
   * Get Saved Address
   */
  async getSavedUserAddress() {
    const response = await this.api.get<TGetUserAddressResponse>(
      '/v1/addresses',
    );
    return response.data;
  }

  /**
   * Delete A Address
   */
  async deleteAddressById(addressId: string) {
    const response = await this.api.delete('/v1/addresses', {
      data: {
        addressId,
      },
    });
    return response.data;
  }
}

const addressService = new AddressService();
export default addressService;
