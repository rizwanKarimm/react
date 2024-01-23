import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { SingleCard } from './SingleCard';

const fetchProduct = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product");
  }
};

const ProductComponent = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  console.log('passpass', data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading product</p>;
  }

  return (
    <>
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
    <div className="container" style={{ maxWidth: '1824px' }}>
        <div className="flex justify-center">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
              {data.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <SingleCard
                    image={product.image}
                    CardTitle={product.title}
                    CardDescription={product.description.split(' ').slice(0, 10).join(' ')}
                    titleHref={`/product/${product.id}`}
                    Button="Details"
                    btnHref={`/product/${product.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default ProductComponent;
