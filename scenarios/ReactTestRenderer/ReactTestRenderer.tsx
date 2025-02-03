import { StyleSheet, Text } from 'react-native';
import { Container, Description, Note, Title } from '../../src/components';

export const ReactTestRenderer = () => {
  return (
    <Container>
      <Title>
        Deprecated: <Text style={styles.inlineCode}>react-test-renderer</Text>
      </Title>
      <Description>
        We are deprecating{' '}
        <Text style={styles.inlineCode}>{'react-test-renderer'}</Text> because
        it implements its own renderer environment that doesn’t match the
        environment users use, promotes testing implementation details, and
        relies on introspection of React’s internals.
      </Description>
      <Description>
        The test renderer was created before there were more viable testing
        strategies available like{' '}
        <Text style={styles.inlineCode}>{'React Testing Library'}</Text> or, and
        we now recommend using a modern testing library instead.
      </Description>
      <Note>
        In React 19, react-test-renderer logs a deprecation warning, and has
        switched to concurrent rendering. We recommend migrating your tests to{' '}
        <Text style={styles.inlineCode}>{'@testing-library/react'}</Text> or
        <Text style={styles.inlineCode}>{'@testing-library/react-native'}</Text> {' '}
        for a modern and well supported testing experience.
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
