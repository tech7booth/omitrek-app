import {SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';
import {StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.rootContainer}>
        <RootNavigation />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
