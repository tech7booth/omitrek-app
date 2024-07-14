import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

function BaseLayout({children}: Required<PropsWithChildren>) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default BaseLayout;
