import UserProfile from '@app/components/screens/TabScreens/AccountTab/UserProfile';
import {ScrollView, StyleSheet} from 'react-native';

function AccountTab() {
  return (
    <ScrollView style={styles.container}>
      <UserProfile />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 24,
  },
});

export default AccountTab;
