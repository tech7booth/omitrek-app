import Button from '@app/components/common/Button';
import {StyleSheet, View} from 'react-native';
import {TUserAddressFieldsRef} from '..';

type Props = {
  getUserDetails: () => TUserAddressFieldsRef;
};

function SaveAddressButton({getUserDetails}: Props) {
  function handlePress() {
    const {nameRef, mobileNoRef, pinCodeRef, addressRef, localityRef} =
      getUserDetails();

    const name = nameRef.current?.getValue();
    const mobileNo = mobileNoRef.current?.getValue();
    const pinCode = pinCodeRef.current?.getValue();
    const address = addressRef.current?.getValue();
    const locality = localityRef.current?.getValue();

    // validating name
    if (name && name?.split(' ').length < 2) {
      nameRef.current?.setError(true, 'Enter Full Name');
      return;
    } else if (mobileNo && mobileNo.length !== 10) {
      mobileNoRef.current?.setError(true, 'Invalid Number!');
      return;
    } else if (pinCode && pinCode.length !== 6) {
      pinCodeRef.current?.setError(true, 'Pincode Must Be 6 Characters Long');
      return;
    } else if (!address) {
      return;
    } else if (!locality) {
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} align="center" variant="contained">
        ADD ADDRESS
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
    paddingVertical: 24,
    paddingBottom: 44,
  },
});

export default SaveAddressButton;
