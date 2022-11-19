import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { PropsWithChildren } from 'react';

const View: React.FC<PropsWithChildren> = (props) => {
    const { children } = props;
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100vh',
                background: palette.background.default,
                color: palette.text.primary,
                overflow: 'hidden',
                display: 'flex',
                flexFlow: 'column',
            }}
        >
            {children}
        </Box>
    );
};

export default View;
