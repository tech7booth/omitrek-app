import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  current: number;
  total: number;
};

const ProgressBar = ({current, total}: Props) => {
  const theme = useTheme();
  // Calculate the fill percentage
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <View style={styles.container}>
      <View style={styles.barBackground}>
        <LinearGradient
          colors={['hsla(144, 67%, 41%, 0.7)', 'hsla(144, 67%, 17%, 0.7)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[
            styles.progressBar,
            {
              width: `${percentage}%`,
              backgroundColor: theme.dark
                ? undefined
                : 'hsla(144, 67%, 41%, 0.3)',
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  barBackground: {
    width: '100%',
    height: 7,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProgressBar;
