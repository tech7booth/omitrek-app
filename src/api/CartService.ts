import {TCartItmesResponse} from '@app/types/api/cart';
import ApiService from './ApiService';

class CartService extends ApiService {
  /**
   * Add to Cart
   */
  async addToCart(productId: string, size: string, quantity = 1) {
    const response = await this.api.post('/v1/cart', {
      productId,
      size,
      quantity,
    });

    return response.data;
  }

  /**
   * Get cart products
   */
  async getCartProducts() {
    const response = await this.api.get<TCartItmesResponse>('/v1/cart');
    return response.data;
  }
}

const cartService = new CartService();

export default cartService;
