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
  sectionContainerMedium: {
    flex: 1.5,
  },
  sectionContainerLarge: {
    flex: 4,
    paddingRight: '0.5rem',
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

function DataCardRowItem({
  centerTopText,
  centerBottomText,
  rightTopText,
  rightBottomText,
}) {
  const classes = useStyles();

  return (
    <div className={classes.dataCardRowItemContainer}>
      <div className={classes.sectionContainerSmall}>
        <ShippingIcon className={classes.icon} />
      </div>
      <div className={classes.sectionContainerLarge}>
        <Typography className={classes.textBold}>{centerTopText}</Typography>
        <Typography variant="secondary" className={classes.textSecondary}>
          {centerBottomText}
        </Typography>
      </div>
      <div className={classes.sectionContainerMedium}>
        {rightTopText && (
          <Typography variant="secondary">{rightTopText}</Typography>
        )}
        {rightBottomText && <Typography>{rightBottomText}</Typography>}
      </div>
    </div>
  );
}

export default DataCardRowItem;
