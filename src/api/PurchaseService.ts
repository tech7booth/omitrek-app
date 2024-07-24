import ApiService from './ApiService';

class PurchaseService extends ApiService {
  /*
   * List Old purchases
   */
  async listOldPurchases() {
    const response = await this.api('/v1/orders');
    return response.data;
  }
}

const purchaseService = new PurchaseService();
export default purchaseService;
