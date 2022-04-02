import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
// import { makeStyles } from '@mui/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SalesIcon from '@mui/icons-material/AttachMoney';
import ProductIcon from '@mui/icons-material/ShoppingBag';
import CustomersIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const sideMenuWidth = 200;

// const useStyles = makeStyles({
//   sideMenuPaper: {
//     width: '200px',
//   },
// });

function SideMenu() {
  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon /> },
    { label: 'Sales', icon: <SalesIcon /> },
    { label: 'Products', icon: <ProductIcon /> },
    { label: 'Customers', icon: <CustomersIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
  ];

  // const classes = useStyles();

  return (
    <Drawer
      sx={{
        width: sideMenuWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sideMenuWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
    >
      <List>
        {menuItems.map(item => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.label.toLowerCase()}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={<Typography variant="body1">{item.label}</Typography>}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default SideMenu;
