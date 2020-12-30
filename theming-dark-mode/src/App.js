import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './styles/Global.styles';
import Toggle from './components/Toggle';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
    </ThemeProvider>
  );
}

export default App;