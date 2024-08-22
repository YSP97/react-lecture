import { primitives, semantics } from '@/theme';
import { THEME_MODE } from '@/theme/semantics';
import { createContext, useContext, useMemo, useState } from 'react';

const themeContext = createContext();

const { DARK, LIGHT } = THEME_MODE;

export function ThemeProvider(props) {
  const [mode, setMode] = useState(LIGHT);

  const themeValue = useMemo(
    () => ({
      mode,
      theme: semantics[mode],
      color: primitives.color,
      toggleThemeMode: () => {
        const nextMode = mode === LIGHT ? DARK : LIGHT;
        setMode(nextMode);
      },
    }),
    [mode]
  );

  return <themeContext.Provider value={themeValue} {...props} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(selector = (state) => state) {
  const themeValue = useContext(themeContext);

  if (!themeValue) {
    throw new Error(
      'useTheme() 훅은 ThemeContext의 내부에서만 사용 가능합니다.'
    );
  }

  if (typeof selector === 'function') {
    return selector(themeValue);
  }

  return themeValue;
}
