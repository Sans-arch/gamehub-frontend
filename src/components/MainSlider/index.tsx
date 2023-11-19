import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LuCircleEqual } from 'react-icons/lu';
import { BiSolidLogIn } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import { Container, Logo, MainGame, Navbar, SignIn } from './styles';
import gameHubLogo from '@assets/logo/logo-white-removebg-preview.png';
import { AuthContext } from '@/src/contexts/auth';
import SearchBar from './Searchbar';

export function MainSlider() {
  const { signed, signOut, user } = useContext(AuthContext);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  function toggleDrawer(open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      setIsDrawerOpened(open);
    };
  }

  return (
    <Container data-testid="main-slider-container">
      <Navbar>
        <Logo>
          <img src={gameHubLogo} alt="Logotipo" width={100} height={100} />
        </Logo>

        <SearchBar />

        <SignIn onClick={toggleDrawer(true)} role="button">
          <LuCircleEqual />
        </SignIn>
      </Navbar>

      <MainGame>
        <h1>Cyberpunk 2077: Phantom Liberty</h1>
        <p>
          Phantom Liberty is a new spy-thriller expansion for the open-world action-adventure RPG Cyberpunk 2077. As
          cyber-enhanced mercenary V, join secret agent Solomon Reed to unravel a web of shattered loyalties and
          sinister political machinations.
        </p>
      </MainGame>

      <Drawer
        sx={{ outline: 'none' }}
        id="drawer-sidebar"
        anchor={'right'}
        open={isDrawerOpened}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, height: '100%', backgroundColor: '#1c1e21', color: '#f5f5f5' }}
          role="listbox"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {signed && user && (
            <p
              style={{
                textAlign: 'center',
                fontSize: '1.3rem',
                marginTop: 20,
              }}
            >
              Seja-bem vindo {user.name}
            </p>
          )}

          <List>
            {signed && (
              <ListItem disablePadding disableGutters sx={{ outline: 'none' }}>
                <ListItemButton onClick={signOut}>
                  <ListItemIcon>{<MailIcon color="warning" />}</ListItemIcon>
                  <ListItemText primary={'Logout'} />
                </ListItemButton>
              </ListItem>
            )}

            {!signed && (
              <Link to="/login" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#f5f5f5', fontSize: '1.55rem' }}>{<BiSolidLogIn />}</ListItemIcon>
                    <ListItemText primary={'Fazer Login'} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )}

            {!signed && (
              <Link to="/register" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                <ListItem disablePadding disableGutters sx={{ outline: 'none' }}>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: '#f5f5f5', fontSize: '1.55rem' }}>{<AiOutlineUserAdd />}</ListItemIcon>
                    <ListItemText primary={'Cadastrar-se'} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )}

            {signed && (
              <Link to="/lists" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                <ListItem disablePadding disableGutters sx={{ outline: 'none' }}>
                  <ListItemButton>
                    <ListItemIcon>{<MailIcon color="info" />}</ListItemIcon>
                    <ListItemText primary={'Minhas listas'} />
                  </ListItemButton>
                </ListItem>
              </Link>
            )}
          </List>
        </Box>
      </Drawer>
    </Container>
  );
}
