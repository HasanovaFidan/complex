
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROOT from './Routes/index.Routes';
import { useState } from 'react';
import { useEffect } from 'react';
import axios, { Axios } from 'axios';
import DataContexs from './contexts/Contexts';


function App() {
  const root = createBrowserRouter(ROOT)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [original, setOriginal] = useState([]);
  

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        setData(res.data);
        setOriginal(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const values = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    original,
    setOriginal,
  };
  return (
    <div className="App">
<DataContexs.Provider value={values}>
<RouterProvider router={root} />
</DataContexs.Provider>
    

    </div>
  );
}

export default App;
