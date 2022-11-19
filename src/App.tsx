import React from 'react';
import AppThemeProvider from './providers/AppThemeProvider';
import AuthenticationProvider from './providers/AuthenticationProvider';
import AppRouter from './routing/AppRouter';

function App() {
    return (
        <AppThemeProvider>
            <AuthenticationProvider>
                <AppRouter />
            </AuthenticationProvider>
        </AppThemeProvider>
    );
}

export default App;
