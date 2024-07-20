import addressService from '@app/api/AddressService';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import AddressItem from './AddressItem';
import {lightTheme} from '@app/constants/colors';

function ShowSavedUserAddress() {
  const queryClient = useQueryClient();
  const addressQuery = useQuery({
    queryKey: ['address'],
    queryFn: () => addressService.getSavedUserAddress(),
  });

  return addressQuery.isLoading ? (
    <ActivityIndicator color={lightTheme.primaryGreen} size={'large'} />
  ) : (
    <FlatList
      data={addressQuery.data?.data}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({item}) => <AddressItem data={item} />}
      keyExtractor={({_id}) => _id}
      refreshControl={
        <RefreshControl
          refreshing={addressQuery.isRefetching}
          onRefresh={() =>
            queryClient.invalidateQueries({
              queryKey: ['address'],
            })
          }
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: lightTheme.primaryGreen,
  },
});

export default ShowSavedUserAddress;
