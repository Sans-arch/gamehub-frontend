import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuCircleEqual } from 'react-icons/lu';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import { useAuth } from '@/src/hooks/useAuth';

import { Container, Logo, MainGame, Navbar, Searchbar, SignIn } from './styles';
import gameHubLogo from '../../../assets/logo/logo-white-removebg-preview.png';

export function MainSlider() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  function toggleDrawer(open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsDrawerOpened(open);
    };
  }

  return (
    <>
      <Container>
        <Navbar>
          <Logo>
            <Image src={gameHubLogo.src} alt="Logotipo" width={100} height={100} />
          </Logo>

          <Searchbar>
            <input type="text" placeholder="What do you want to play?" />
          </Searchbar>

          <SignIn onClick={toggleDrawer(true)}>
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
            {isAuthenticated && (
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
              {isAuthenticated && (
                <ListItem disablePadding disableGutters sx={{ outline: 'none' }}>
                  <ListItemButton onClick={logout}>
                    <ListItemIcon>{<MailIcon color="warning" />}</ListItemIcon>
                    <ListItemText primary={'Logout'} />
                  </ListItemButton>
                </ListItem>
              )}
              <Link href="/login" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{<MailIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary={'Fazer Login'} />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link href="/register" style={{ textDecoration: 'none', color: '#f5f5f5' }}>
                <ListItem disablePadding disableGutters sx={{ outline: 'none' }}>
                  <ListItemButton>
                    <ListItemIcon>{<MailIcon color="secondary" />}</ListItemIcon>
                    <ListItemText primary={'Cadastrar-se'} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
      </Container>
    </>
  );
}
