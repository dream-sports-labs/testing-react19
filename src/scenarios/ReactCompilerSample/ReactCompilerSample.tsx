import { Image, StyleSheet, Text, View } from 'react-native';
import { ClientComponent } from './ClientComponent';

const SampleImage = require('../../assets/react-compiler/react-compiler-in-devtools.png');

export const ReactCompilerSample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font22}>React Compiler in React Native</Text>
      <ClientComponent />
      <Image
        source={SampleImage}
        height={200}
        width={200}
        resizeMode="center"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  font22: {
    fontSize: 22,
  },
  image: {
    height: 200,
    marginTop: 20,
  },
});
