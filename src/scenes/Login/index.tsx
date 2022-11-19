import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import View from '../../components/View';

const Login: React.FC = () => {
    const { loginWithPopup, isLoading, error } = useAuth0();
    return (
        <View>
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Typography variant="h4">Domino</Typography>
                    <Box>
                        <Button onClick={() => loginWithPopup()}>
                            Send it
                        </Button>
                    </Box>
                </Box>
            </Box>
        </View>
    );
};

export default Login;
