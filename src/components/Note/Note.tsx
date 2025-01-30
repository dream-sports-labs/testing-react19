import React, { type PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type NoteProps = PropsWithChildren<{
  title?: string;
  type?: 'info' | 'warning' | 'success' | 'error';
}>;

export const Note = ({ children, title, type = 'info' }: NoteProps) => {
  return (
    <View style={[styles.note, styles[type]]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.content}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    padding: 12,
    borderRadius: 6,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  info: {
    backgroundColor: '#E8F5FF',
    borderLeftWidth: 4,
    borderLeftColor: '#1E88E5',
  },
  warning: {
    backgroundColor: '#FFF8E1',
    borderLeftWidth: 4,
    borderLeftColor: '#FFA000',
  },
  success: {
    backgroundColor: '#E8F5E9',
    borderLeftWidth: 4,
    borderLeftColor: '#43A047',
  },
  error: {
    backgroundColor: '#FFEBEE',
    borderLeftWidth: 4,
    borderLeftColor: '#D32F2F',
  },
});
