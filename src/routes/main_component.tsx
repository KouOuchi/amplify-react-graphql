import { Authenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { Outlet, 
         Link,
         NavLink,
         Form,
         ActionFunction,
         LoaderFunction,
         useLoaderData,
         useNavigation,
         useNavigate,
         redirect, } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const MainComponent: React.FC = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const navItems = [
    {index:0, display:'拠点・在庫場所', fn:()=>{ navigate('places');}},
    {index:1, display:'工具', fn:()=>{ navigate('tool_search'); }},
    {index:2, display:'ログアウト', fn:() => { signOut(); }},
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        NS工具箱App(仮)
      </Typography>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item.index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={item.fn}>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window.document.body;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NS工具箱App(仮)
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item.index} sx={{ color: '#fff' }} onClick={item.fn}>
                {item.display}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default MainComponent;
