import purchaseService from '@app/api/PurchaseService';
import {useQuery} from '@tanstack/react-query';

function UserOrdersList() {
  const {data} = useQuery({
    queryKey: ['orders'],
    queryFn: () => purchaseService.listOldPurchases(),
  });

  return null;
}

export default UserOrdersList;
