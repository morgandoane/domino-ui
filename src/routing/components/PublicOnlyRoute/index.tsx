import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoadingScene from '../../../scenes/LoadingScene';

const PublicOnlyRoute: React.FC<{ children: ReactElement }> = ({
    children,
}) => {
    const { isLoading, user } = useAuth0();

    if (isLoading) return <LoadingScene />;
    if (user) return <Navigate to="/" />;

    return children;
};

export default PublicOnlyRoute;
