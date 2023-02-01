import Head from 'next/head';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, pink } from '@mui/material/colors/';
import Nav from './Nav';

export default function Layout({ children, home }) {

  let theme = createTheme({
    palette: {
      primary: {
        main: '#FF00AA',
      },
      secondary: {
        main: '#C4B82C',
      },
    },
  });
  theme = responsiveFontSizes(theme);
  
  return (
    <div style={{backgroundImage: 'url("/wp-50.png")',}}>
      
      <Head>
        
      </Head>
      
        <header>
          
        </header>
        <main >
          <ThemeProvider theme={theme} >
            
              {/* <Container sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
              //Center Site
              //   position: 'fixed',
              //   top: '50%',
              //   left: '50%',
              //   transform: 'translate(-50%, -50%)'
              }}> */}
                  {children}
          </ThemeProvider>
        </main>
    </div>
  );
}