import { CircularProgress } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import View from '../../components/View';

const LoadingScene: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <View>
            <CircularProgress />
        </View>
    );
};

export default LoadingScene;
