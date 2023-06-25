import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from 'react-redux';

const Products = () => {

    const products = useSelector(state => state.product.items);
    // console.log(products);

//   const DUMMY_PRODUCTS = [
//     {
//       id: 'p1',
//       price: 6,
//       title: 'My First Book',
//       description: 'The first book I ever wrote😍',
//     },
//     {
//       id: 'p2',
//       price: 8,
//       title: 'My Second Book',
//       description: 'The Second book I ever Read😁',
//     }
//   ]

const cartItem = useSelector(state => state.product.cartItems)
    console.log(cartItem);

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
        />
        ) )}
        
      </ul>
    </section>
  );
};

export default Products;
