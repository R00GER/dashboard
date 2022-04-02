import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import SideMenu from "./components/SideMenu";
import AuthenticatedApp from "./components/AuthenticatedApp";
import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });
  const [APIData, setAPIData] = useState([]);

  const url = "http://localhost:4000";

  useEffect(() => {
    const getAllData = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(url);
        if (data) {
          setLoading(false);
          setAPIData(data);
        }
      } catch (err) {
        setLoading(false);
        setError({ isError: true, message: "Something went wrong 😞" });
      }
    };
    getAllData();
  }, []);

  console.log(APIData);
  console.log(loading);
  console.log(APIData.map((sale) => sale.orderDate.slice(-4)));

  return (
    <div className="App">
      <SideMenu />
      <AuthenticatedApp>
        {!!APIData.length && (
          <Routes>
            <Route path="dashboard" element={<Dashboard APIData={APIData} />} />
          </Routes>
        )}
      </AuthenticatedApp>
      <LoadingSpinner loading={loading} error={error} />
    </div>
  );
}

export default App;
