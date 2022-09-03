import { CssBaseline, Container, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Catalog from '../features/catalog/Catalog';
import Header from './Header'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType == 'light'? "#eaeaea" : "#121212"
        // default: "#121212"
      }
    }
  })
  
  const toggleLightDark = () => {setDarkMode(!darkMode)}

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header toggleLightDark={toggleLightDark} />
      <Container>
        <Catalog />
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
