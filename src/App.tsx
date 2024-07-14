import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';
import {StatusBar, StyleSheet} from 'react-native';

function App() {
  StatusBar.setBackgroundColor('#FFF');
  StatusBar.setBarStyle('dark-content');

  return (
    <SafeAreaView style={styles.rootContainer}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
