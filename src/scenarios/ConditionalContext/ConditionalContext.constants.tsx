export const CONDITIONAL_CONTEXT_TEXTS = {
  CODE_BLOCK: `import {use} from 'react';
import ThemeContext from './ThemeContext'

function CodeBlock({isLoading}) {
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  

  // This would not work with useContext
  // because of the early return.
  const theme = use(ThemeContext);
  
  return (
    <View style={{color: theme.color}}>
      {children}
    </View>
  );
}`,
  CTA_THEME_TOGGLE: 'Toggle Theme of Code Block',
  CTA_LOADING_TOGGLE: 'Trigger Loading State',
};
