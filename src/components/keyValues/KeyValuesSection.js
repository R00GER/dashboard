import ProfitIcon from '@mui/icons-material/AttachMoney';
import SalesIcon from '@mui/icons-material/ShoppingCart';
import CustomerIcon from '@mui/icons-material/Face';
import { makeStyles } from '@mui/styles';
import DataCardContainer from '../dataCards/DataCardContainer';
import KeyValuesItem from './KeyValuesItem';

const useStyles = makeStyles({
  keyValuesSectionContainer: {
    display: 'flex',
    gap: '0.5rem',
    gridArea: 'keyValues',
    width: '100%',
  },
  dataCardContainer: {
    border: '1px solid red',
  },
});

function KeyValuesSection({ sales }) {
  const getTotals = property =>
    sales.reduce((total, sale) => total + +sale[property], 0).toFixed(3);

  const getTotalProfit = () => {
    const totalProfit = getTotals('profit');
    console.log({ totalProfit });
    return `${totalProfit} EUR`;
  };

  const getTotalSales = () => {
    const totalSales = getTotals('sales');
    return `${totalSales} EUR`;
  };

  const getTotalCustomers = () =>
    [...new Set(sales.map(salesAction => salesAction.customerId))].length;

  const items = [
    {
      label: 'Total Sales',
      icon: <ProfitIcon />,
      total: getTotalProfit(),
    },
    {
      label: 'Total Profit',
      icon: <SalesIcon />,
      total: getTotalSales(),
    },
    {
      label: 'Total Customers',
      icon: <CustomerIcon />,
      total: getTotalCustomers(),
    },
  ];

  const classes = useStyles();

  return (
    <section className={classes.keyValuesSectionContainer}>
      {items.map(({ label, icon, total }) => (
        <DataCardContainer key={label} small>
          <KeyValuesItem label={label} icon={icon} total={total} />
        </DataCardContainer>
      ))}
    </section>
  );
}

export default KeyValuesSection;
