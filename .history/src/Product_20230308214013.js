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
  // console.log(name);
  return (
    <section className='section section-center'>
      <Link to='/' className='link'>
        back home
      </Link>
      <div>
        <div className='title'>
          <h2>{name}</h2>
          <div className='title-underline'></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
