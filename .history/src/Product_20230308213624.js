import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  // const data = useParams();
  // console.log(data);
  const { productID } = useParams();
  const fetchData = async () => {
    try {
      const { data } = axios.get(`/api/products?id=${productID}`);
      setProduct(data);
    } catch (error) {}
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className='section section-center'>
        <h2>Loading...</h2>
      </section>
    );
  }
  const { fields } = product;
  const { name, desc, price, image } = fields;
  console.log(name);
  return <div>Single Product</div>;
};

export default Product;
