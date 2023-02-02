import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@/styles/globals.css'

let theme = createTheme({
  palette: {
    primary: {
      main: '#FF00AA',
    },
    secondary: {
      main: '#C4B82C',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Modak, cursive',
    },
    h2: {
      fontFamily: 'Modak, cursive',
    },
    h3: {
      fontFamily: 'Modak, cursive',
    },
    h4: {
      fontFamily: 'Modak, cursive',
    },
    h5: {
      fontFamily: 'Coiny, cursive',
    },
    h6: {
      fontFamily: 'Sofia Sans, sans-serif',
    },
    body1: {
      fontFamily: 'Sofia Sans, sans-serif',
      //fontFamily: 'Coiny, cursive',
    },
  },
  components: {
    // Name of the component
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: 'white',
          backgroundColor: 'white', 
          borderRadius: '5px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          //fontSize: "2em",
          color: "white",
          backgroundColor: "#FF00AA"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": { // <-- mixing the two classes
            color: "white",
            backgroundColor: "#FF00AA",
            borderRadius: '7px'
          }
        }
      }
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
