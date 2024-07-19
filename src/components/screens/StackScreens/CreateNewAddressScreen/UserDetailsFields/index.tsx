import {ScrollView, StyleSheet, View} from 'react-native';
import FieldHeadline from './FieldHeadline';
import {lightTheme} from '@app/constants/colors';
import Input, {InputRef} from '@app/components/common/Input';
import {RefObject, useRef} from 'react';
import SaveAddressButton from './SaveAddressButton';
import {useTheme} from '@react-navigation/native';

export type TUserAddressFieldsRef = {
  nameRef: RefObject<InputRef>;
  mobileNoRef: RefObject<InputRef>;
  pinCodeRef: RefObject<InputRef>;
  addressRef: RefObject<InputRef>;
  localityRef: RefObject<InputRef>;
};

function UserDetailsFields() {
  const theme = useTheme();

  const nameRef = useRef<InputRef>(null);
  const mobileNoRef = useRef<InputRef>(null);
  const pinCodeRef = useRef<InputRef>(null);
  const addressRef = useRef<InputRef>(null);
  const localityRef = useRef<InputRef>(null);

  function getUserData(): TUserAddressFieldsRef {
    return {
      nameRef,
      mobileNoRef,
      pinCodeRef,
      addressRef,
      localityRef,
    };
  }

  const sectionBgColor = theme.dark ? undefined : '#FFF';

  return (
    <>
      <ScrollView
        style={{backgroundColor: theme.dark ? undefined : lightTheme.grey}}>
        <FieldHeadline headline="CONTACT DETAILS" />
        <View style={{...styles.section, backgroundColor: sectionBgColor}}>
          <Input ref={nameRef} placeholder="Name*" />
          <Input
            ref={mobileNoRef}
            maxLength={10}
            placeholder="Mobile No*"
            inputMode="tel"
          />
        </View>

        <FieldHeadline headline="ADDRESS" />
        <View style={{...styles.section, backgroundColor: sectionBgColor}}>
          <Input
            ref={pinCodeRef}
            placeholder="Pin Code*"
            maxLength={6}
            inputMode="numeric"
          />
          <Input
            ref={addressRef}
            placeholder="Address (House No, Building. Street, Area)*"
          />
          <Input ref={localityRef} placeholder="Locality / Town*" />
        </View>
      </ScrollView>
      <SaveAddressButton getUserDetails={getUserData} />
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
