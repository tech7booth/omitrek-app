import addressService from '@app/api/AddressService';
import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import {TGetUserAddressResponse} from '@app/types/api/address';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';
import {StyleSheet, ToastAndroid, View} from 'react-native';

type Props = {
  data: TGetUserAddressResponse['data'][number];
};

function AddressItem({data}: Props) {
  const queryClient = useQueryClient();
  const deleteAddressMutation = useMutation({
    mutationFn: (variable: string) =>
      addressService.deleteAddressById(variable),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['address']});
    },
    onError(error) {
      if (error instanceof AxiosError) {
        ToastAndroid.show(
          error.response?.data.msg || 'Something Went Wrong!',
          ToastAndroid.SHORT,
        );
      }
    },
  });

  function handleDelete() {
    deleteAddressMutation.mutate(data._id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Typography size={16} bold={'bold'}>
          {data.name}
        </Typography>
        {data.isDefault && (
          <Typography
            color={lightTheme.primaryGreen}
            customStyle={styles.defaultText}>
            Default
          </Typography>
        )}
      </View>
      <View>
        <Typography>{data.address}</Typography>
        <Typography>{data.landMark}</Typography>
        <Typography>
          {data.city}, {data.state} {data.pinCode}
        </Typography>
        <View style={{height: 10}} />
        <View style={styles.mobileNoContainer}>
          <Typography>Mobile: </Typography>
          <Typography bold={'bold'}>{data.phone}</Typography>
        </View>
      </View>
      <View style={styles.deleteBtnContainer}>
        <Button
          variant="contained"
          align="center"
          buttonColor="rgb(204,0,0)"
          onPress={handleDelete}>
          Delete
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  defaultText: {
    borderWidth: 1,
    borderColor: lightTheme.primaryGreen,
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  mobileNoContainer: {
    flexDirection: 'row',
  },
  deleteBtnContainer: {
    marginVertical: 10,
  },
});

export default AddressItem;
