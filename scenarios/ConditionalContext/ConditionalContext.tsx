import React, { createContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
    Container,
    Description,
    Note,
    Title,
} from '../../src/components';
import { Themes } from '../ContextAsProvider/ContextAsProvider.interface';
import { CONDITIONAL_CONTEXT_TEXTS } from './ConditionalContext.constants';
import { ConditionalCodeBlock } from './components/ConditionalCodeBlock/ConditionalCodeBlock';


export const ConditionalThemeContext = createContext(Themes.DARK);
export const ConditionalContext = () => {
  const [theme, setTheme] = useState(Themes.DARK);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT));
  };

  const toggleLoadingState = () => {
    if (isLoading) {return;}

    setIsLoading(prevLoadingState => !prevLoadingState);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);



  return (
    <ConditionalThemeContext value={theme}>
      <Container>
        <Title>
            Conditional Context with <Text style={styles.inlineCode}>use()</Text>
        </Title>
        <Description>
          <Text>
            In React 19, you can consume <Text style={styles.inlineCode}>{'<Context>'}</Text> conditionally with {' '}
            <Text style={styles.inlineCode}>use()</Text>
          </Text>
        </Description>
        <ConditionalCodeBlock isLoading={isLoading}>{CONDITIONAL_CONTEXT_TEXTS.CODE_BLOCK}</ConditionalCodeBlock>
        <Note>
            Codeblock is deriving theme from context conditionally.
        </Note>
        <View style={styles.actionSection}>
          <Button onPress={toggleTheme} title={CONDITIONAL_CONTEXT_TEXTS.CTA_THEME_TOGGLE} />
        </View>
        <View style={styles.actionSection}>
          <Button onPress={toggleLoadingState} title={CONDITIONAL_CONTEXT_TEXTS.CTA_LOADING_TOGGLE} disabled={isLoading}/>
        </View>
      </Container>
    </ConditionalThemeContext>
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
