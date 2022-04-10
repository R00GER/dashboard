import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/ModeNight';
import { useContext } from 'react';
import { ColorModeContext } from './ColorModeProvider';

const useStyles = makeStyles({
  toolsContainer: {
    width: '100%',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icon: {
    fontSize: '1.5rem',
  },
  lightModeIcon: {
    color: '#fff',
  },
});

function Tools() {
  const { darkMode, setDarkMode } = useContext(ColorModeContext);

  const classes = useStyles();

  return (
    <div className={classes.toolsContainer}>
      <IconButton
        className={classes.iconButton}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <LightModeIcon className={[classes.icon, classes.lightModeIcon]} />
        ) : (
          <DarkModeIcon className={classes.icon} />
        )}
      </IconButton>
    </div>
  );
}

export default Tools;
