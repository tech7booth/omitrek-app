import Typography from '@app/components/common/Typography';
import ProgressBar from '@app/components/shared/ProgressBar';
import {lightTheme} from '@app/constants/colors';
import {StyleSheet, View} from 'react-native';

function CouponsLeft() {
  return (
    <View style={styles.container}>
      <View style={styles.couponsContainer}>
        <Typography bold={'bold'}>7584 Coupons</Typography>
        <Typography bold={'bold'}>214 Left</Typography>
      </View>
      <ProgressBar current={7584 - 214} total={7584} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.grey,
    paddingHorizontal: 15,
  },
  couponsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CouponsLeft;
