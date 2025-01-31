import {PropsWithChildren, startTransition, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type ItemProps = PropsWithChildren<{
  action: (newQuantity: number) => Promise<void>;
}>;
export const Item = ({action}: ItemProps) => {
  const [quantity, setQuantity] = useState(1);

  function handleChange(newValue: number) {
    const value = Math.max(0, newValue);
    setQuantity(value);
    startTransition(() => {
      action(value);
    });
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}>Eras Tour Tickets</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Quantity:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleChange(quantity - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          defaultValue="1"
          value={String(quantity)}
          onChangeText={text => handleChange(Number(text))}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleChange(quantity + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 60,
    textAlign: 'center',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
