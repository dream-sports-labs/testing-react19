import { useContext, type PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../../scenarios/ContextAsProvider/ContextAsProvider';
import { Themes } from '../../../scenarios/ContextAsProvider/ContextAsProvider.interface';

type CodeBlockProps = PropsWithChildren<{
  code?: string;
  selectable?: boolean;
}>;
export const CodeBlock = ({
  code,
  children,
  selectable = true,
}: CodeBlockProps) => {
  const theme = useContext(ThemeContext); // this is intentionally bounded with ContextAsProvider component for validate the use case

  return (
    <View
      style={[
        styles.codeBlock,
        theme === Themes.DARK ? styles.darkMode : styles.lightMode,
      ]}>
      <Text
        style={[
          styles.codeText,
          theme === Themes.DARK ? styles.darkText : styles.lightText,
        ]}
        selectable={selectable}>
        {children ?? code}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  codeBlock: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 2,
  },
  darkMode: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
  },
  lightMode: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
  },
  darkText: {
    color: 'white',
  },
  lightText: {
    color: 'black',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
});
