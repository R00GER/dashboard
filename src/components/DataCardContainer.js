import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  containerBase: {
    // minWidth: "200px",
    // maxWidth: "400px",
    // height: "150px",
    padding: '0.5rem',
    borderRadius: '8px',
    flex: 1,
  },
  containerSmall: {
    minWidth: '180px',
    maxHeight: '120px',
  },
  containerMedium: {
    width: '360px',
    minHeight: autoHeight => (autoHeight ? 'auto' : '500px'),
  },
});

function DataCardContainer({ children, small, medium, autoHeight }) {
  const classes = useStyles(autoHeight);

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.bg',
      }}
      className={[
        classes.containerBase,
        small && classes.containerSmall,
        medium && classes.containerMedium,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Box>
  );
}

export default DataCardContainer;
