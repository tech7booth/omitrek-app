import {Pressable, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';

type Props = {
  icon: string;
  title: string;
  onPress?: () => void;
  type?: 'Community' | 'Material';
};

function Option({icon, onPress, title, type = 'Community'}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {type === 'Community' ? (
          <MaterialCommunityIcons name={icon} color={'#000'} size={18} />
        ) : (
          <MaterialIcons name={icon} color={'#000'} size={18} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Typography size={18}>{title}</Typography>
      </View>
      <View>
        <MaterialIcons name="arrow-forward-ios" size={18} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: lightTheme.grey,
    width: 35,
    height: 35,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    paddingLeft: 16,
  },
});

export default Option;
