import {PropsWithChildren, startTransition, useActionState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {addToCart} from '../../../../src/utility';

type AddToCartProps = PropsWithChildren<{
  itemID: string;
  itemTitle: string;
}>;
export const AddToCart = ({itemID, itemTitle}: AddToCartProps) => {
  const [message, submitAction, isPending] = useActionState(addToCart, null);

  const handleSubmit = ({itemID}: {itemID: string}) => {
    if (isPending) return;
    startTransition(() => submitAction(itemID));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{itemTitle}</Text>

      <Button
        title="Add to Cart"
        onPress={() => handleSubmit({itemID})}
        disabled={isPending}
      />

      {isPending ? (
        <ActivityIndicator size="small" color="blue" />
      ) : (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
  },
});
