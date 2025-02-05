import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

'use client';


export const ClientComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.padding10}>
      <Text style={styles.fontSize18}>Client Counter:</Text>
      <Text style={styles.bold}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  fontSize18: {
    fontSize: 18,
  },
  padding10: {
    padding: 10,
  },
});
