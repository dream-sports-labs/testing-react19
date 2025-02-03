import {StyleSheet, Text, View} from 'react-native';
import {Container, Description, Note, Title} from '../../src/components';
import {useState, useTransition} from 'react';
import {Item} from './components/Item/Item';
import {Total} from './components/Total/Total';
import {USE_TRANSITION_FUNCTIONS_TEXTS} from './UseTransition.constants';
import {updateQuantity} from '../../src/utility';

export const UseTransition = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isPending, startTransition] = useTransition();
  const updateQuantityAction = async (newQuantity: number) => {
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };
  return (
    <Container>
      <Title>
        <Text>
          New hook: <Text style={styles.inlineCode}>useTransition</Text>
        </Text>
      </Title>
      <Description>
        <Text>
          <Text style={styles.inlineCode}>useTransition</Text> is a React Hook
          that lets you render a part of the UI in the background
        </Text>
      </Description>
      <View style={{padding: 20}}>
        <Item action={updateQuantityAction} />
        <Total quantity={quantity} isPending={isPending} />
      </View>
      <Note>{USE_TRANSITION_FUNCTIONS_TEXTS.DESCRIPTION}</Note>
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
