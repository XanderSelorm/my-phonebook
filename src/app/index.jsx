import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { lightTheme } from 'themes';
import Compose from 'hooks/ComposeProvider';
import { PhonebookProvider } from 'hooks/Context';
import ReactGA from 'react-ga';
import DirectoryHome from './pages/Home';
import ContactDetails from './pages/ContactDetails';
import SearchResults from './pages/SearchResults';

ReactGA.initialize('G-Y0J7S9KCCD');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Compose components={[PhonebookProvider]}>
            <Box>
              <Routes>
                <Route path="/contact/:id" element={<ContactDetails />} />
                <Route path="/search" element={<SearchResults />} />
                <Route exact path="/" element={<DirectoryHome />} />
              </Routes>
            </Box>
          </Compose>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
