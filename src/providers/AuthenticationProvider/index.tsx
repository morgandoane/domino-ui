import { Auth0Provider } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';

const AuthenticationProvider: React.FC<PropsWithChildren> = (props) => {
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH_DOMAIN || ''}
            clientId={process.env.REACT_APP_AUTH_CLIENT_ID || ''}
            redirectUri={window.location.origin}
        >
            {props.children}
        </Auth0Provider>
    );
};

export default AuthenticationProvider;
