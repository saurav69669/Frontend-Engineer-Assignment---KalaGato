import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { productAction } from '../../store/product-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id, thumbnail,brand, category } = props;
//    console.log(props);

  const addToCartHandler = () => {
    // dispatch(cartAction.addItemToCart({
    //   id,
    //   title,
    //   price
    // }))
    
    dispatch(productAction.addCartItems({
        id,
        title,
        description,
        thumbnail,
        price,
        brand,
        category
    }))

    console.log('Item added to Cart!');
}

  return (
    <li className={classes.item}>
      <Card>
        <header>
        <img src={thumbnail} alt="Girl in a jacket" width="200" height="200"></img>
          <h3>{title}</h3>
          <div className={classes.price}><sup>$</sup>{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
