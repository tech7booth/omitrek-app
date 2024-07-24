import {TProductInfo, TSearchProductResponse} from '@app/types/api/query';
import ApiService from './ApiService';

class QueryService extends ApiService {
  /**
   * Search for products
   */
  async searchProducts(query: string) {
    const response = await this.api.get<TSearchProductResponse>(
      '/v/search-products',
      {
        params: {
          key: query,
        },
      },
    );
    return response.data;
  }

  /**
   * Get Product Details
   */
  async getProductDetilsById(productId: string) {
    const response = await this.api.get<TProductInfo>(
      `/v/product-info/${productId}`,
    );
    return response.data;
  }
}

const queryService = new QueryService();
export default queryService;
