import { makeStyles } from "@mui/styles";
import ShippingIcon from "@mui/icons-material/LocalShipping";
import DataCardContainer from "./DataCardContainer";
import DataCardRowItem from "./DataCardRowItem";

const useStyles = makeStyles({
  LastShippedContainer: {
    gridArea: "lastShipped / 2 / span 2",
  },
});

const LastShipped = ({ APIData }) => {
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
        <div style={{ marginBottom: "0.5rem" }}>
          <h3>Last shipped</h3>
        </div>
        {lastShippedOrders.map((shipment) => (
          <DataCardRowItem icon={<ShippingIcon />} />
        ))}
      </DataCardContainer>
    </div>
  );
};

export default LastShipped;
