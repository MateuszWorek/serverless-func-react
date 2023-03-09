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

  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>Basic setup</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {products.map((product) => {
          const { id, image: url, name, price } = product;
          return (
            <article className='product' key={id}>
              <img src={url} alt={name} />
              <div className='info' alt={name}>
                <h5>{name}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Basic;
