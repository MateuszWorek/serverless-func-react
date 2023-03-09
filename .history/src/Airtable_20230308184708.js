import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = '/api/products';

const Airtable = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setProducts(data);
    } catch (error) {}
  };
  return <div>Airtable</div>;
};

export default Airtable;
