import { PropsWithChildren, useContext } from 'react';
import { CodeBlock as BaseCodeBlock } from '../../../../src/components';
import { ThemeContext } from '../../ContextAsProvider';

type CodeBlockProps = PropsWithChildren<{}>;
export const CodeBlock = ({children}: CodeBlockProps) => {
  const theme = useContext(ThemeContext);

  return <BaseCodeBlock theme={theme}>{children}</BaseCodeBlock>;
};
