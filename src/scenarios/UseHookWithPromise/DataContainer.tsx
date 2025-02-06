import { Suspense, use } from 'react';
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native';
import { CodeBlock } from '../../components';
import { USE_HOOK_WITH_PROMISE_TEXTS } from './UseHookWithPromise.constants';

const DataContainer = ({ dataPromise, handleClick }: { dataPromise: Promise<string>, handleClick: () => void }) => {
  return (
      <Suspense fallback={<ActivityIndicator size="large" color="#0000ff" />}>
        <DataComponent dataPromise={dataPromise} />
        <View style={styles.actionSection}>
           <Button onPress={handleClick} title={USE_HOOK_WITH_PROMISE_TEXTS.CTA_TRY_AGAIN} />
         </View>
      </Suspense>
  );
};

const DataComponent = ({ dataPromise }: { dataPromise: Promise<string> }) => {
  const data = use(dataPromise);
  return <CodeBlock>{data}</CodeBlock>;
};
export default DataContainer;

const styles = StyleSheet.create({
  actionSection: {
    marginTop: 16,
  },
});
