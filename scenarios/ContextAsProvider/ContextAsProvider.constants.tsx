
export const CONTENT_AS_PROVIDER_TEXTS = {
    CODE_BLOCK: `const ThemeContext = createContext('');

function App({children}) {
  return (
    <ThemeContext value="dark">
      {children}
    </ThemeContext>
  );  
}`,
};
