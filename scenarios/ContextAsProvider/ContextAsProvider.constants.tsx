export const CONTENT_AS_PROVIDER_TEXTS = {
  CODE_BLOCK: `const ThemeContext = createContext('');

function App({children}) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );  
}`,
  THEME_TOGGLE_CTA: 'Toggle Theme of Code Block',
};
