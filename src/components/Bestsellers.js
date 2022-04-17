import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DataCardContainer from './dataCards/DataCardContainer';
import DataCardRowItem from './dataCards/DataCardRowItem';
import ButtonComponent from './UI/ButtonComponent';

const useStyles = makeStyles(theme => ({
  bestsellersContainer: {
    gridArea: '3 / 2 / span 5 / 2',
    [theme.breakpoints.down('lg')]: {
      gridArea: 'bestsellers',
    },
  },

  titleRow: {
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTextTransform: {
    textTransform: 'none',
  },
}));

function Bestsellers({ bestsellers }) {
  const classes = useStyles();

  const flattedBestsellers = bestsellers.flat();

  return (
    <div className={classes.bestsellersContainer}>
      <DataCardContainer>
        <div className={classes.titleRow}>
          <Typography variant="h3">Bestsellers</Typography>
          <ButtonComponent
            classes={classes.buttonTextTransform}
            text="See all"
          />
        </div>
        {flattedBestsellers.map(({ id, name, totalSales }) => (
          <DataCardRowItem
            key={id}
            centerTopText={name}
            rightTopText="Sales"
            rightBottomText={`${totalSales.toFixed(0)} €`}
          />
        ))}
      </DataCardContainer>
    </div>
  );
}

export default Bestsellers;
