import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SalesIcon from '@mui/icons-material/AttachMoney';
import ProductIcon from '@mui/icons-material/ShoppingBag';
import CustomersIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useLocation } from 'react-router-dom';

const sideMenuWidth = 200;

const useStyles = makeStyles({
  selectedIcon: {
    '& > svg': {
      color: 'var(--color-primary-main)',
    },
  },
});

function ApplicationSideMenu() {
  const { pathname } = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon /> },
    { label: 'Sales', icon: <SalesIcon /> },
    { label: 'Products', icon: <ProductIcon /> },
    { label: 'Customers', icon: <CustomersIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> },
  ];

  const classes = useStyles();

  return (
    <Drawer
      sx={{
        width: sideMenuWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sideMenuWidth,
          boxSizing: 'border-box',
        },
        padding: '0 0.5rem',
      }}
      variant="permanent"
    >
      <List>
        {menuItems.map(item => {
          const labelToPath = item.label.toLowerCase();
          const selected = `/${labelToPath}` === pathname;

          return (
            <ListItemButton
              key={item.label}
              component={Link}
              to={labelToPath}
              selected={selected}
            >
              <ListItemIcon
                className={[selected && classes.selectedIcon]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body1">{item.label}</Typography>}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}

export default ApplicationSideMenu;
