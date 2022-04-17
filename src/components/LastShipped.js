import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import DataCardContainer from './dataCards/DataCardContainer';
import DataCardRowItem from './dataCards/DataCardRowItem';
import ButtonComponent from './UI/ButtonComponent';

const useStyles = makeStyles(theme => ({
  LastShippedContainer: {
    gridArea: 'lastShipped / 2 / span 2',
    [theme.breakpoints.down('lg')]: {
      gridArea: 'lastShipped',
    },
  },
  titleRow: {
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  buttonTextTransform: {
    textTransform: 'none',
  },
  bottomButton: {
    maxWidth: '450px',
  },
}));

function LastShipped({ lastShipped }) {
  const classes = useStyles();

  return (
    <div className={classes.LastShippedContainer}>
      <DataCardContainer>
        <div className={classes.titleRow}>
          <Typography variant="h3">Last shipped</Typography>
          <ButtonComponent
            classes={classes.buttonTextTransform}
            text="See all"
          />
        </div>
        {lastShipped.map(
          ({ orderId, customerName, shipDate, city, country }) => (
            <DataCardRowItem
              key={orderId}
              centerTopText={customerName}
              centerBottomText={`To ${country}, ${city}`}
              rightTopText={shipDate}
            />
          ),
        )}
        <div className={classes.bottomRow}>
          <ButtonComponent
            fullWidth
            variant="outlined"
            text="New Shipment"
            classes={classes.bottomButton}
          />
        </div>
      </DataCardContainer>
    </div>
  );
}

export default LastShipped;
