import { makeStyles } from '@mui/styles';
import DataCardContainer from '../dataCards/DataCardContainer';

const useStyles = makeStyles({
  graphContainer: {
    gridArea: 'graph',
    width: '100px',
    height: 'auto',
    border: '1px solid red',
  },
});

function Graph() {
  const classes = useStyles();
  return (
    <div className={classes.graphContainer}>
      <DataCardContainer />
    </div>
  );
}

export default Graph;
