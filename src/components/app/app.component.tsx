import React, { useEffect, useRef, useState } from 'react';
import Header from '../header/header.component';
import Home from '../home/home.component';
import { AppContainer } from './app.styles';
import Profile from '../profile/profile.component';
import { BrowserRouter } from 'react-router-dom';
import Work from '../work/work.component';
import { getFromLS, setToLS } from '../../util/storage';
import * as themes from '../../styles/theme.json';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import useTheme from '../../hooks/useTheme';
import { GlobalStyles } from '../../styles/styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsDarkMode } from '../../redux/reducers/theme/theme.selector';

interface Props {
  isDarkMode: boolean;
}
const App: React.FC<Props> = ({ isDarkMode }) => {
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const workRef = useRef(null);
  setToLS('all-themes', themes);

  const { theme, themeLoaded, getFonts, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  const themeChangeRef = useRef(() => {});
  themeChangeRef.current = () => {
    const themes = getFromLS('all-themes');
    let themeS = isDarkMode ? themes.data.dark : themes.data.light;
    setMode(themeS);
  };
  useEffect(() => {
    themeChangeRef.current();
    console.log('Changed');
  }, [isDarkMode]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });
  return (
    <React.Fragment>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <AppContainer>
            <BrowserRouter>
              <Header
                homeRef={homeRef}
                profileRef={profileRef}
                workRef={workRef}
              />
              <Home homeRef={homeRef} profileRef={profileRef} />
              <Profile profileRef={profileRef} />
              <Work workRef={workRef} />
            </BrowserRouter>
          </AppContainer>
        </ThemeProvider>
      )}
    </React.Fragment>
  );
};

const mapStatetoProps = createStructuredSelector({
  isDarkMode: selectIsDarkMode,
});

export default connect(mapStatetoProps)(App);
