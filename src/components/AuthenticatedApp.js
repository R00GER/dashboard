import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    flexGrow: 1,
    padding: "1rem",
    background: "var(--color-main-background)",
  },
});

const AuthenticatedApp = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default AuthenticatedApp;
