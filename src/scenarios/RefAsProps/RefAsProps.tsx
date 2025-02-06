import React, { useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  CodeBlock,
  Container,
  Description,
  Title,
} from '../../components';
import { REF_AS_PROPS_TEXTS } from './RefAsProps.constants';

const ComponentWithRefAsProp = ({ ref }: { ref: any }) => {
    return <Button onPress={() => ref?.current?.focus()} title="Focus Input" />;
  };


export const RefAsProps = () => {
  const inputRef = useRef<TextInput>(null);

  return (
      <Container>
        <Title>
            Ref as Prop in Function Components
        </Title>
        <Description>
          <Text>
            In React 19, we can now access <Text style={styles.inlineCode}>ref</Text> as a prop for function components, no longer need <Text style={styles.inlineCode}>forwardRef</Text>.
          </Text>

        </Description>
        <View style={styles.actionSection}>
            <TextInput ref={inputRef} placeholder="Click on Focus Input" style={styles.input} />
            <ComponentWithRefAsProp ref={inputRef} />
        </View>
        <Description>
        <Text>
            Sample Code:
          </Text>
        </Description>
        <CodeBlock>{REF_AS_PROPS_TEXTS.CODE_BLOCK}</CodeBlock>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});
