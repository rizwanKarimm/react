import logo from './logo.svg';
import { useQuery } from '@tanstack/react-query';
import './App.css';
import ProductComponent from './ProductComponent';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

function App() {
  const { data, isLoading, isError } = useQuery({ queryKey: ['todos'], queryFn: fetchProducts });

  console.log('daaaaaa', data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <Navbar /> {/* Navbar should be outside the mapping */}
      <div>
        {data.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default App;
