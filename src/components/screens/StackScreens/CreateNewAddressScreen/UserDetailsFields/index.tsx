import {ScrollView, StyleSheet, ToastAndroid, View} from 'react-native';
import FieldHeadline from './FieldHeadline';
import {lightTheme} from '@app/constants/colors';
import Input from '@app/components/common/Input';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Formik} from 'formik';
import {object, string} from 'yup';
import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import {useMutation} from '@tanstack/react-query';
import addressService from '@app/api/AddressService';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {TUseNavigation} from '@app/types/navigation';

export type TUserAddress = {
  name: string;
  mobile: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  landmark: string;
};

let addressSchema = object({
  name: string().required('Enter Full Name'),
  mobile: string().required('Enter 10 Digit Mobile Number').min(10).max(13),
  pincode: string().required('Enter 6 Digit PIN Code').length(6),
  address: string().required('Enter Full Address'),
  locality: string().required('Enter Your Locality'),
  city: string().required('Enter Your City Name'),
  state: string().required('Enter State'),
  landmark: string().required('Enter Nearest Landmark'),
});

function UserDetailsFields() {
  const navigation = useNavigation<TUseNavigation>();
  const createAddressMutation = useMutation({
    mutationFn: (variables: TUserAddress) =>
      addressService.saveAddress(variables),
    onSuccess: () => {
      navigation.goBack();
    },
    onError() {
      ToastAndroid.show('Error While Saving Address', ToastAndroid.SHORT);
    },
  });
  const theme = useTheme();
  const sectionBgColor = theme.dark ? undefined : '#FFF';

  function handleSaveAddress(values: TUserAddress) {
    createAddressMutation.mutateAsync(values);
  }

  return (
    <>
      <ScrollView
        style={{backgroundColor: theme.dark ? undefined : lightTheme.grey}}>
        <Formik
          initialValues={{
            name: '',
            mobile: '',
            pincode: '',
            address: '',
            locality: '',
            city: '',
            state: '',
            landmark: '',
          }}
          validationSchema={addressSchema}
          onSubmit={handleSaveAddress}>
          {({handleChange, handleSubmit, values, errors}) => (
            <>
              <FieldHeadline headline="CONTACT DETAILS" />
              <View
                style={{...styles.section, backgroundColor: sectionBgColor}}>
                {/* Name Input */}
                {errors.name && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.name}
                  </Typography>
                )}
                <Input
                  placeholder="Name*"
                  onChangeText={handleChange('name')}
                  value={values.name}
                />

                {/* Mobile Number Input */}
                {errors.mobile && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.mobile}
                  </Typography>
                )}
                <Input
                  maxLength={13}
                  placeholder="Mobile No*"
                  inputMode="tel"
                  onChangeText={handleChange('mobile')}
                  value={values.mobile}
                />
              </View>

              <FieldHeadline headline="ADDRESS" />
              <View
                style={{...styles.section, backgroundColor: sectionBgColor}}>
                {/* Pin Code Input */}
                {errors.pincode && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.pincode}
                  </Typography>
                )}
                <Input
                  placeholder="Pin Code*"
                  maxLength={6}
                  inputMode="numeric"
                  onChangeText={handleChange('pincode')}
                  value={values.pincode}
                />
                {/* Address Input */}
                {errors.address && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.address}
                  </Typography>
                )}
                <Input
                  placeholder="Address (House No, Building. Street, Area)*"
                  onChangeText={handleChange('address')}
                  value={values.address}
                />
                {/* locality Input */}
                {errors.locality && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.locality}
                  </Typography>
                )}
                <Input
                  placeholder="Locality / Town*"
                  onChangeText={handleChange('locality')}
                  value={values.locality}
                />
                {/* state Input */}
                {errors.state && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.state}
                  </Typography>
                )}
                <Input
                  placeholder="State*"
                  onChangeText={handleChange('state')}
                  value={values.state}
                />
                {/* city Input */}
                {errors.city && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.city}
                  </Typography>
                )}
                <Input
                  placeholder="City*"
                  onChangeText={handleChange('city')}
                  value={values.city}
                />
                {/* Landmark Input */}
                {errors.landmark && (
                  <Typography color={lightTheme.primaryGreen}>
                    {errors.landmark}
                  </Typography>
                )}
                <Input
                  placeholder="Landmark*"
                  onChangeText={handleChange('landmark')}
                  value={values.landmark}
                />
                <Button
                  variant="contained"
                  align="center"
                  onPress={handleSubmit}>
                  ADD ADDRESS
                </Button>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
      <Spinner visible={createAddressMutation.isPending} />
    </>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 30,
    paddingVertical: 22,
    gap: 12,
  },
});

export default UserDetailsFields;
