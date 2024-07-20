import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import {TGetUserAddressResponse} from '@app/types/api/address';
import {StyleSheet, View} from 'react-native';

type Props = {
  data: TGetUserAddressResponse['data'][number];
};

function AddressItem({data}: Props) {
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
});

export default AddressItem;
