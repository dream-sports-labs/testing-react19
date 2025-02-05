import { StyleSheet, Text, View } from 'react-native';
import { ClientComponent } from './ClientComponent';

// TODO: Refactor this file along with child components
export const ReactCompilerSample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font22}>React Compiler in React Native</Text>
      <ClientComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font22: {
    fontSize: 22,
  },
});
