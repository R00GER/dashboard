import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  keyValuesItemContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '0 0.5rem',
  },
  keyValuesItemTop: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '60%',
  },
  keyValuesItemBottom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '40%',
  },
});

function KeyValuesItem({ label, icon, total }) {
  const classes = useStyles();

  return (
    <div key={label} className={classes.keyValuesItemContainer}>
      <div className={classes.keyValuesItemTop}>
        <span>{icon}</span>
      </div>
      <div className={classes.keyValuesItemBottom}>
        <Typography
          variant="body1"
          style={{ fontWeight: '600', fontSize: '1.1rem' }}
        >
          {total}
        </Typography>
        <Typography
          variant="caption"
          style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}
        >
          {label}
        </Typography>
      </div>
    </div>
  );
}

export default KeyValuesItem;
