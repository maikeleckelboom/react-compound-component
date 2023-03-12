import * as React from 'react';
import ProductCard from './ProductCard/ProductCard';
import { Product } from './types';
import useProduct from './useProduct';

const product: Product = {
  id: 1,
  image: 'https://iili.io/HCURIHu.jpg',
  title: 'Viston Earl Grey Tea',
  category: 'Black Tea',
  rating: { stars: 4, reviews: 4 },
  price: 8.95,
};

function App() {
  const { addToCart } = useProduct(product);

  return (
    <ProductCard
      product={product}
      image={<ProductCard.Image />}
      info={
        <ProductCard.Info>
          <ProductCard.Category />
          <ProductCard.Title />
          <ProductCard.Rating />
          <ProductCard.Price />
        </ProductCard.Info>
      }
      action={
        <ProductCard.Button onClick={addToCart}>Add to cart</ProductCard.Button>
      }
    />
  );
}

export default App;
