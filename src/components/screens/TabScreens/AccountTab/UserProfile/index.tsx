import Typography from '@app/components/common/Typography';
import {lightTheme} from '@app/constants/colors';
import {Pressable} from 'react-native';
import {Image, StyleSheet, View} from 'react-native';

const AVATAR_URL =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c76c069-8a8c-4a1e-9ff3-71fdcf13ebec/dd96blg-46422849-911f-4a7e-8a98-98dd2f6bd94f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjNzZjMDY5LThhOGMtNGExZS05ZmYzLTcxZmRjZjEzZWJlY1wvZGQ5NmJsZy00NjQyMjg0OS05MTFmLTRhN2UtOGE5OC05OGRkMmY2YmQ5NGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.boT9ZdWQJymwHLc2FklBXGGv1rdetwsOkq0vJkynpXY';
const NAME = 'Uchiha Obito';

function UserProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{uri: AVATAR_URL}}
          style={styles.avatar}
          resizeMode="cover"
        />
        <View style={styles.avatarContainer}>
          <Typography bold={'bold'} size={14}>
            Hello,
          </Typography>
          <Typography bold={'bold'} size={20}>
            {NAME}
          </Typography>
        </View>
      </View>
      <View>
        <Pressable style={styles.walletBalance}>
          <Typography bold={'900'} size={14}>
            $300
          </Typography>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  walletBalance: {
    marginTop: 'auto',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 22,
    backgroundColor: lightTheme.grey,
  },
  avatarContainer: {
    alignItems: 'flex-end',
    gap: 12,
  },
  avatar: {
    borderRadius: 35,
    width: 70,
    aspectRatio: 1,
  },
});

export default UserProfile;
