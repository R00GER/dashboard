import ShippingIcon from '@mui/icons-material/LocalShipping';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  dataCardRowItemContainer: {
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
  },
  sectionContainerSmall: {
    flex: 1,
  },
  sectionContainerLarge: {
    flex: 4,
  },
  icon: {
    color: 'var(--color-primary-main)',
  },
  textBold: {
    fontWeight: '600',
    lineHeight: '1.2',
  },
  textSecondary: {
    fontSize: '0.9rem',
  },
});

function DataCardRowItem({ customerName, shipDate, city, country }) {
  const shippedTo = `To ${country}, ${city}`;

  const classes = useStyles();

  return (
    <div className={classes.dataCardRowItemContainer}>
      <div className={classes.sectionContainerSmall}>
        <ShippingIcon className={classes.icon} />
      </div>
      <div className={classes.sectionContainerLarge}>
        <Typography className={classes.textBold}>{customerName}</Typography>
        <Typography variant="secondary" className={classes.textSecondary}>
          {shippedTo}
        </Typography>
      </div>
      <div className={classes.sectionContainerSmall}>
        <Typography variant="secondary">{shipDate}</Typography>
      </div>
    </div>
  );
}

export default DataCardRowItem;
