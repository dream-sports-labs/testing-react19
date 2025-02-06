import {useOptimistic, useRef, useState, useTransition} from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const Thread = ({
  messages,
  sendMessage,
}: {
  messages: any[];
  sendMessage: (message: string) => void;
}) => {
  const [text, setText] = useState('');
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<TextInput>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [...state, {text: newMessage, sending: true}],
  );

  const handleSend = async () => {
    if (!text.trim()) return;

    addOptimisticMessage(text);
    setText('');
    await sendMessage(text);
  };

  const handleSubmit = () => {
    if (isPending) return;
    startTransition(() => handleSend());
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={optimisticMessages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Text style={styles.message}>
            {item.text}
            {item.sending && <Text style={styles.sending}> (Sending...)</Text>}
          </Text>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Type a message..."
          value={text}
          onChangeText={setText}
        />
        <Button title="Send" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  message: {fontSize: 18, padding: 5},
  sending: {color: 'gray', fontSize: 14},
  inputContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  input: {flex: 1, borderBottomWidth: 1, marginRight: 10, padding: 5},
});
