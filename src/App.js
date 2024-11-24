import React from 'react';
import { Box, TextField, Button, ThemeProvider, createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    bgcolor: '#f5f5f5',
                    padding: 2,
                }}
            >
                <SearchIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                <TextField
                    variant="outlined"
                    placeholder="Digite sua busca"
                    sx={{ width: '100%', maxWidth: 400, mb: 2 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: '100%', maxWidth: 400 }}
                >
                    Buscar
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default App;
