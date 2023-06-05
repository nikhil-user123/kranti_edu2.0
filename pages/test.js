import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('http://localhost:5000/sendproduct');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="center_of_page">
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.subject}</p>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <Image height={100} width={100} src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;