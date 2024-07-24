import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';
import {StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.rootContainer}>
        <SafeAreaView style={styles.rootContainer}>
          <RootNavigation />
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
