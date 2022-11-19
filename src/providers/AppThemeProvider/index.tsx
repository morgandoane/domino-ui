import { createTheme, ThemeProvider, Theme } from '@mui/material';
import { orange } from '@mui/material/colors';
import React, { PropsWithChildren } from 'react';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const getTheme = (mode: Theme['palette']['mode']) =>
    createTheme({
        status: {
            danger: orange[500],
        },
        palette: {
            mode,
            background:
                mode === 'dark'
                    ? {
                          default: '#1E1E1E',
                          paper: '#333333',
                      }
                    : {
                          default: '#E5E5E5',
                          paper: '#FFF',
                      },
        },
    });

const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const fromStorage = localStorage.getItem('theme');

    const [mode, setMode] = React.useState<Theme['palette']['mode']>(
        fromStorage === 'light' ? 'light' : 'dark'
    );

    const theme = getTheme(mode);

    React.useEffect(() => {
        const currentVal = localStorage.getItem('theme');
        if (currentVal !== mode) {
            localStorage.setItem('theme', mode);
        }
    }, [mode]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
