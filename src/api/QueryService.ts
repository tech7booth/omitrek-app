import {TSearchProductsResponse} from '@app/types/api/query';
import ApiService from './ApiService';

class QueryService extends ApiService {
  /**
   * Search for products
   */
  async searchProducts(query: string) {
    const searchResults = await this.api.get<TSearchProductsResponse>(
      '/v/search-products',
      {
        params: {
          key: query,
        },
      },
    );
    return searchResults.data;
  }
}

const queryService = new QueryService();
export default queryService;
