import {StyleSheet, Text, View} from 'react-native';
import {Container, Description, Title} from '../../src/components';
import {AddToCart} from './components/AddToCart/AddToCart';
import { USE_ACTION_FUNCTIONS_TEXTS } from './UseActionState.constants';

export const UseActionState = () => {
  return (
    <Container>
      <Title>
        <Text>
          New hook: <Text style={styles.inlineCode}>useActionState</Text>
        </Text>
      </Title>
      <Description>
        <Text>
          <Text style={styles.inlineCode}>useActionState</Text> is a Hook that
          allows you to update state based on the result of a form action
        </Text>
      </Description>
      <View style={styles.appContainer}>
        <AddToCart itemID={USE_ACTION_FUNCTIONS_TEXTS.ITEM_ID_1} itemTitle={USE_ACTION_FUNCTIONS_TEXTS.ITEM_TITLE_1} />
        <AddToCart itemID={USE_ACTION_FUNCTIONS_TEXTS.ITEM_ID_2} itemTitle={USE_ACTION_FUNCTIONS_TEXTS.ITEM_TITLE_2} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inlineCode: {
    fontFamily: 'monospace',
    padding: 4,
    backgroundColor: '#99a1b31a',
    borderRadius: 4,
    fontWeight: 'bold',
    color: '#d73a49',
  },
});
