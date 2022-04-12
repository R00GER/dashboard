import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import DataCardContainer from './DataCardContainer';
import DataCardRowItem from './DataCardRowItem';
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
  },
  bottomRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.5rem',
  },
  buttonTextTransform: {
    textTransform: 'none',
  },
}));

function LastShipped({ APIData }) {
  const classes = useStyles();

  const sortedShipDates = APIData.sort((a, b) => {
    const firstDate = new Date(a.shipDate);
    const secondDate = new Date(b.shipDate);

    return secondDate - firstDate;
  });

  const lastShippedOrders = [
    sortedShipDates[0],
    sortedShipDates[1],
    sortedShipDates[2],
  ];

  return (
    <div className={classes.LastShippedContainer}>
      <DataCardContainer medium autoHeight>
        <div className={classes.titleRow}>
          <Typography variant="h3">Last shipped</Typography>
          <ButtonComponent
            classes={classes.buttonTextTransform}
            text="See all"
          />
        </div>
        {lastShippedOrders.map(({ customerName, shipDate, city, country }) => (
          <DataCardRowItem
            customerName={customerName}
            shipDate={shipDate}
            city={city}
            country={country}
          />
        ))}
        <div className={classes.bottomRow}>
          <ButtonComponent fullWidth variant="outlined" text="New Shipment" />
        </div>
      </DataCardContainer>
    </div>
  );
}

export default LastShipped;
