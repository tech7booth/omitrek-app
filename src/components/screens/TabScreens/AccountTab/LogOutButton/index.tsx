import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

function LogOutButton() {
  function handleLogout() {
    console.log('Log Out');
  }

  return (
    <Pressable style={styles.container} onPress={handleLogout}>
      <Typography size={20} bold={'bold'}>
        Log Out
      </Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 38,
    borderRadius: 6,
    backgroundColor: lightTheme.grey,
  },
});

export default LogOutButton;
