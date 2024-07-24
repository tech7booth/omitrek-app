import SearchOrders from '@app/components/screens/StackScreens/OrdersScreen/SearchOrders';
import UserOrdersList from '@app/components/screens/StackScreens/OrdersScreen/UserOrdersList';
import BaseLayout from '@app/components/shared/BaseLayout';

function OrdersScreen() {
  return (
    <BaseLayout>
      <SearchOrders />
      <UserOrdersList />
    </BaseLayout>
  );
}

export default OrdersScreen;
