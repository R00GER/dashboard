import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ApplicationSideMenu from './components/ApplicationSideMenu';
import AuthenticatedApp from './components/AuthenticatedApp';
import Dashboard from './views/Dashboard';
// import { ColorModeContext } from './components/ColorModeProvider';
import ApplicationMenuBar from './components/menuBar/ApplicationMenuBar';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: '' });
  const [APIData, setAPIData] = useState([]);

  // const context = useContext(ColorModeContext);
  // console.log(context);

  const url = 'http://localhost:4000';

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
        setError({ isError: true, message: 'Something went wrong 😞' });
      }
    };
    getAllData();
  }, []);

  // console.log(loading);
  // console.log(APIData.map(sale => sale.orderDate.slice(-4)));
  return (
    <div className="App">
      <ApplicationMenuBar />
      <ApplicationSideMenu />
      <AuthenticatedApp>
        {!!Object.keys(APIData).length && (
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
