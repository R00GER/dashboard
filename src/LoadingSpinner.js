import { BarLoader } from "react-spinners";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const override = `
display: block;
margin: 0 auto;
background-color: rgba(54, 215, 183, 0.2);
`;

const color = "rgb(54, 215, 183)";

const useStyles = makeStyles({
  spinnerContainer: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const LoadingSpinner = ({ loading, error }) => {
  const classes = useStyles();

  if (!loading) return null;

  return (
    <div className={classes.spinnerContainer}>
      <BarLoader
        color={color}
        loading={loading}
        css={override}
        height={6}
        width="30%"
        speedMultiplier={0.75}
      />
      {error.isError && !loading && <Typography>{error.message}</Typography>}
    </div>
  );
};

export default LoadingSpinner;
