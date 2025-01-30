import React, { createContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
    CodeBlock,
    Container,
    Description,
    Note,
    Title,
} from '../../src/components';
import { CONTENT_AS_PROVIDER_TEXTS } from './ContextAsProvider.constants';
import { Themes } from './ContextAsProvider.interface';

export const ThemeContext = createContext(Themes.DARK);
export const ContextAsProvider = () => {
  const [theme, setTheme] = useState(Themes.DARK);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT));
  };

  return (
    <ThemeContext value={theme}>
      <Container>
        <Title>
          <Text style={styles.inlineCode}>Context</Text> as Provider
        </Title>
        <Description>
          <Text>
            In React 19, you can render{' '}
            <Text style={styles.inlineCode}>{'<Context>'}</Text> as a provider
            instead of{' '}
            <Text style={styles.inlineCode}>{'<Context.Provider>'}</Text>
          </Text>
        </Description>
        <CodeBlock>{CONTENT_AS_PROVIDER_TEXTS.CODE_BLOCK}</CodeBlock>
        <Note>
          New Context providers can use{' '}
          <Text style={styles.inlineCode}>{'<Context>'}</Text> and we will be
          publishing a codemod to convert existing providers. In future versions
          we will deprecate{' '}
          <Text style={styles.inlineCode}>{'<Context.Provider>'}</Text>
        </Note>
        <View style={styles.actionSection}>
          <Button onPress={toggleTheme} title="Toggle Theme of Code Block" />
        </View>
      </Container>
    </ThemeContext>
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
