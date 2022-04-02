import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  containerBase: {
    background: "var(--color-container-background)",
    // minWidth: "200px",
    // maxWidth: "400px",
    // height: "150px",
    padding: "0.5rem",
    borderRadius: "8px",
    flex: 1,
  },
  containerSmall: {
    minWidth: "180px",
    maxHeight: "120px",
  },
  containerMedium: {
    width: "360px",
    minHeight: (autoHeight) => (autoHeight ? "auto" : "500px"),
  },
});

const DataCardContainer = ({ children, small, medium, large, autoHeight }) => {
  const classes = useStyles(autoHeight);
  return (
    <div
      className={[
        classes.containerBase,
        small && classes.containerSmall,
        medium && classes.containerMedium,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default DataCardContainer;
