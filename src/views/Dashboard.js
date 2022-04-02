import { makeStyles } from "@mui/styles";
import KeyValuesSection from "../components/KeyValuesSection";
import LastShipped from "../components/LastShipped";

const useStyles = makeStyles({
  dashboardContainer: {
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "580px 360px",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: `
    "keyValues lastShipped"
    `,
  },
});

const Dashboard = ({ APIData }) => {
  const classes = useStyles();

  return (
    <div className={classes.dashboardContainer}>
      <KeyValuesSection APIData={APIData} />
      <LastShipped APIData={APIData} />
    </div>
  );
};

export default Dashboard;
