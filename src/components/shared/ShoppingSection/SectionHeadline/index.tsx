import Button from '@app/components/common/Button';
import Typography from '@app/components/common/Typography';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  title: string;
  seeAllFn: () => void;
};

function SectionHeadline({title, seeAllFn}: Props) {
  return (
    <View style={styles.container}>
      <Typography size={20} bold={'bold'}>
        {title}
      </Typography>
      <Button variant="text" onPress={seeAllFn}>
        See All
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SectionHeadline;
