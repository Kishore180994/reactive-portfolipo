import { useEffect, useRef, useState } from 'react';
import { getFromLS, setToLS } from '../util/storage';
import _ from 'lodash';

const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);
  const setThemeRef = useRef(() => {});
  const setMode = (mode: any) => {
    setToLS('theme', mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  };

  setThemeRef.current = () => {
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  };

  useEffect(() => {
    setThemeRef.current();
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};

export default useTheme;
