import React, { use, createContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Create a ThemeContext
const ThemeContext = createContext<{ color: string; background: string } | null>(null);

function Heading({ children }: { children: React.ReactNode }) {

  if (children == null) {
    return null;
  }
  // Using `use` to read ThemeContext (React 19 feature)
  const theme = use(ThemeContext);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text style={{ color: theme?.color, fontSize: 24, fontWeight: 'bold' }}>
      {children}
    </Text>
  );
}

export function UseWithContext() {
  const [darkMode, setDarkMode] = useState(false);

  const theme: { color: string; background: string } = {
    color: darkMode ? 'white' : 'black',
    background: darkMode ? 'black' : 'white',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Heading>React 19 use API</Heading>
        <Button title="Toggle Theme" onPress={() => setDarkMode(!darkMode)} />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
