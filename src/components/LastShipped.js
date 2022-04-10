import { makeStyles } from '@mui/styles';
import ShippingIcon from '@mui/icons-material/LocalShipping';
import { Typography } from '@mui/material';
import DataCardContainer from './DataCardContainer';
import DataCardRowItem from './DataCardRowItem';

const useStyles = makeStyles(theme => ({
  LastShippedContainer: {
    gridArea: 'lastShipped / 2 / span 2',
    [theme.breakpoints.down('lg')]: {
      gridArea: 'lastShipped',
    },
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

  console.log(lastShippedOrders);

  return (
    <div className={classes.LastShippedContainer}>
      <DataCardContainer medium autoHeight>
        <div style={{ marginBottom: '0.5rem' }}>
          <Typography variant="h3">Last shipped</Typography>
        </div>
        {lastShippedOrders.map(shipment => (
          <DataCardRowItem shipment={shipment} icon={<ShippingIcon />} />
        ))}
      </DataCardContainer>
    </div>
  );
}

export default LastShipped;
