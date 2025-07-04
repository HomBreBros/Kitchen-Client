// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', // Kitchen/green theme
        },
        secondary: {
            main: '#FF9800', // Orange accent
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;