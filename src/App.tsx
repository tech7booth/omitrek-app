import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';

function App() {
  // Update Statusbar
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);

  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
