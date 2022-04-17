import { AppBar, Toolbar } from '@mui/material';
import Tools from './Tools';

function ApplicationMenuBar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Tools />
      </Toolbar>
    </AppBar>
  );
}

export default ApplicationMenuBar;
