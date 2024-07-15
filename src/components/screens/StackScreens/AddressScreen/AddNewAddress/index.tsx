import Button from '@app/components/common/Button';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

function AddressNewAddress() {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('CreateNewAddressScreen');
  }

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} size={18} variant="text">
        + ADD NEW ADDRESS
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
  },
});

export default AddressNewAddress;
