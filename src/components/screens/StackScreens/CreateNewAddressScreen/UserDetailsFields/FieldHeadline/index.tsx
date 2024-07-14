import Typography from '@app/components/common/Typography';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  headline: string;
};

function FieldHeadline({headline}: Props) {
  return (
    <View style={styles.container}>
      <Typography bold={'bold'} size={18}>
        {headline}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 30,
  },
});
export default FieldHeadline;
