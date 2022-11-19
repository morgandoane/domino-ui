import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import View from '../../components/View';

const Logout: React.FC = () => {
    const { logout } = useAuth0();

    logout();
    return <View></View>;
};

export default Logout;
