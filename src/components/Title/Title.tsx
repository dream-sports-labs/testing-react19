import React, { type PropsWithChildren } from 'react';
import { StyleSheet, Text } from 'react-native';

type TitleProps = PropsWithChildren<{
  title?: string;
}>;
export const Title = ({children, title}: TitleProps ) => {
  return <Text style={styles.title}>{children ?? title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 700,
  },
});
