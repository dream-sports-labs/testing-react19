import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Description, Title } from '../../components';
import { deliverMessage } from '../../utility';
import { Thread } from './components/Thread/Thread';

export const UseOptimistic = () => {
  const [messages, setMessages] = useState([
    {text: 'Add something to list!', sending: false},
  ]);

  async function sendMessage(message: string) {
    const sentMessage = await deliverMessage(message);
    setMessages(messages => [...messages, {text: sentMessage, sending: false}]);
  }

  return (
    <Container>
      <Title>
        <Text>
          New hook: <Text style={styles.inlineCode}>useOptimistic</Text>
        </Text>
      </Title>
      <Description>
        <Text>
          <Text style={styles.inlineCode}>useOptimistic</Text> is a React Hook
          that lets you show a different state while an async action is underway
        </Text>
      </Description>
      <Thread messages={messages} sendMessage={sendMessage} />
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
});
