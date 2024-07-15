import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

function LogOutButton() {
  function handleLogout() {}

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={styles.container}
        onPress={handleLogout}
        android_ripple={{borderless: false}}>
        <Typography size={20} bold={'bold'} color="#000">
          Log Out
        </Typography>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignSelf: 'flex-start',
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: lightTheme.grey,
  },
  container: {
    paddingVertical: 12,
    paddingHorizontal: 38,
  },
});

export default LogOutButton;
