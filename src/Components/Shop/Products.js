import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from 'react-redux';

const Products = () => {

    const products = useSelector(state => state.product.items);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
          key= {product.id}
          id = {product.id}
          title= {product.title}
          price={product.price}
          description={product.description}
          images={product.images}
          thumbnail={product.thumbnail}
          category={product.category}
          brand={product.brand}
          discountPercentage = {product.discountPercentage}
        />
        ) )}
        
      </ul>
    </section>
  );
};

export default Products;
