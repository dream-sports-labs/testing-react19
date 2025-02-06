import { StyleSheet, Text } from 'react-native';
import {
  CodeBlock,
  Container,
  Description,
  Note,
  Title,
} from '../../components';
import { RTR_SHALLOW_RENDERER_TEXTS } from './RtrShallowRenderer.constants';

export const RtrShallowRenderer = () => {
  return (
    <Container>
      <Title>
        Removed:{' '}
        <Text style={styles.inlineCode}>react-test-renderer/shallow</Text>
      </Title>
      <Description>
        <Text>
          In React 18, we updated{' '}
          <Text style={styles.inlineCode}>{'react-test-renderer/shallow'}</Text>{' '}
          to re-export{' '}
          <Text style={styles.inlineCode}>{'react-shallow-renderer'}</Text>
        </Text>
      </Description>
      <Description>
        <Text>
          In React 19, we’re removing{' '}
          <Text style={styles.inlineCode}>{'react-test-render/shallow'}</Text>{' '}
          to prefer installing the package directly:
        </Text>
      </Description>
      <CodeBlock>{RTR_SHALLOW_RENDERER_TEXTS.CODE_BLOCK_1}</CodeBlock>
      <CodeBlock>{RTR_SHALLOW_RENDERER_TEXTS.CODE_BLOCK_2}</CodeBlock>
      <Note>
        Please reconsider shallow rendering Shallow rendering depends on React
        internals and can block you from future upgrades. We recommend migrating
        your tests to{' '}
        <Text style={styles.inlineCode}>{'@testing-library/react'}</Text> or{' '}
        <Text style={styles.inlineCode}>{'@testing-library/react-native'}</Text>
        .
      </Note>
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
    lineHeight: 20,
  },
  actionSection: {
    marginTop: 16,
  },
});
