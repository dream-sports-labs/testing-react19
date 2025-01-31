import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
    Container,
    Description,
    Title,
} from '../../src/components';
import { USE_HOOK_WITH_PROMISE_TEXTS } from './UseHookWithPromise.constants';
import { fetchData } from '../../src/utility';
import DataContainer from './DataContainer';


export const UseHookWithPromise = () => {
  const [dataPromise, setDataPromise] = useState<Promise<string> | null>(null);

  const handleClick = () => {
    setDataPromise(fetchData(USE_HOOK_WITH_PROMISE_TEXTS.CODE_BLOCK));
  };
  return (
      <Container>
        <Title>
            Use with Promise
        </Title>
        <Description>
          <Text>
            In React 19, we can read a promise with <Text style={styles.inlineCode}>use()</Text>, and React will Suspend until the promise resolves.
          </Text>
        </Description>
        <View style={styles.actionSection}>
          <Button onPress={handleClick} title={USE_HOOK_WITH_PROMISE_TEXTS.CTA_FETCH_DATA} />
        </View>
        {dataPromise && <DataContainer dataPromise={dataPromise} handleClick={handleClick}/>}
      </Container>
  );
};

const styles = StyleSheet.create({
  inlineCode: {
    fontFamily: 'monospace',
    padding: 4,
    backgroundColor: '#99a1b31a',
    borderRadius: 4,
    fontWeight: 'bold',
    color: '#d73a49',
  },
  actionSection: {
    marginTop: 16,
  },
});
