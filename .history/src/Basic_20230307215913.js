import React, { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://temp-serverless-func-01.netlify.app/api/2-basic-api';

const Basic = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setProducts(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <section>basci api</section>;
};

export default Basic;
