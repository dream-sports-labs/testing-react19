import {PropsWithChildren} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

type TotalProps = PropsWithChildren<{
  quantity: number;
  isPending: boolean;
}>;
export const Total = ({quantity, isPending}: TotalProps) => {
  const formattedTotal = (quantity * 9999).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <View style={styles.total}>
      <Text style={styles.label}>Total:</Text>
      <Text style={styles.value}>
        {isPending ? (
          <ActivityIndicator size="small" color="blue" />
        ) : (
          formattedTotal
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
  },
});
