import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { CodeBlock, Container, Description, Title } from '../../src/components';
import { REF_CLEANUP_FUNCTIONS_TEXTS } from './RefCleanupFunctions.constants';

type RefCleanupFunctionsProps = {};
export const RefCleanupFunctions = ({}: RefCleanupFunctionsProps) => {
  const [showInput, setShowInput] = useState(true);
  const count = useRef(0);

  const handleInputVisibility = () => {
    setShowInput(prev => !prev);
  };

  const refCleanupHandler = () => {
    // ref created

    // NEW: return a cleanup function to reset
    // the ref when element is removed from DOM.

    return () => {
      count.current += 1;
      console.log('Cleanup function is called');
    };
  };

  return (
    <Container>
      <Title>
        <Text>{REF_CLEANUP_FUNCTIONS_TEXTS.TITLE}</Text>
      </Title>
      <Description>{REF_CLEANUP_FUNCTIONS_TEXTS.DESCRIPTION}</Description>
      <CodeBlock>{REF_CLEANUP_FUNCTIONS_TEXTS.CODE_BLOCK}</CodeBlock>
      <View style={styles.actionSection}>
        <Button
          onPress={handleInputVisibility}
          title="Toggle Input Visibility"
        />
      </View>
      <View style={styles.actionSection}>
        <Text style={styles.count}>Clean-up Count: {count.current}</Text>
      </View>
      {showInput && (
        <TextInput
          style={styles.input}
          placeholder="Type something"
          ref={refCleanupHandler}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    padding: 4,
    marginVertical: 24,
  },
  actionSection: {
    marginTop: 16,
  },
  inlineCode: {
    fontFamily: 'monospace',
    padding: 4,
    backgroundColor: '#99a1b31a',
    borderRadius: 4,
    fontWeight: 'bold',
    color: '#d73a49',
  },
  count: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});
