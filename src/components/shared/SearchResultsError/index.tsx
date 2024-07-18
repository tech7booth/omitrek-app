import Typography from '@app/components/common/Typography';
import {StyleSheet, View} from 'react-native';

type Props = {
  errorText?: string;
};

function SearchResultsError({
  errorText = 'Oops! No Matching Results Found.',
}: Props) {
  return (
    <View style={styles.container}>
      <Typography align="center" size={24}>
        {errorText}
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 30,
  },
});

export default SearchResultsError;
