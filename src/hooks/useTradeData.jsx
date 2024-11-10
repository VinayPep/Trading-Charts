import { useState, useEffect } from "react";
import apiData from "../assets/resources/annualValues.json";

const useTradeData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTradeData = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setData(apiData.data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchTradeData();
  }, []);

  return { data, loading, error };
};

export default useTradeData;
