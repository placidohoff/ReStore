import { CssBaseline, Container, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from '../features/about/AboutPage';
import Catalog from '../features/catalog/Catalog';
import ProductDetails from '../features/catalog/ProductDetails';
import ContactPage from '../features/contact/ContagePage';
import HomePage from '../features/home/HomePage';
import Header from './Header'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? "#eaeaea" : "#121212"
        // default: "#121212"
      }
    }
  })

  const toggleLightDark = () => { setDarkMode(!darkMode) }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleLightDark={toggleLightDark} />
      <Container>
        <Switch>
          <Route exact path='/catalog' component={Catalog} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/catalog/:id' component={ProductDetails} />
          <Route path='/about' component={AboutPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Container>

    </ThemeProvider>
  );
}

export default App;
