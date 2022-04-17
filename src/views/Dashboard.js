import { makeStyles } from '@mui/styles';
import Bestsellers from '../components/Bestsellers';
import Graph from '../components/graph/Graph';
import KeyValuesSection from '../components/keyValues/KeyValuesSection';
import LastShipped from '../components/LastShipped';

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: '580px 360px',
    gridTemplateRows: '120px',
    gridTemplateAreas: `
    "keyValues lastShipped"
    "graph bestsellers"
    `,
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
    "keyValues"
    "graph"
    "lastShipped"
    "bestsellers"
    `,
    },
  },
}));

function Dashboard({ APIData: { sales, lastShipped, bestsellers } }) {
  const classes = useStyles();

  return (
    <div className={classes.dashboardContainer}>
      <KeyValuesSection sales={sales} />
      <LastShipped lastShipped={lastShipped} />
      <Graph />
      <Bestsellers bestsellers={bestsellers} />
    </div>
  );
}

export default Dashboard;
