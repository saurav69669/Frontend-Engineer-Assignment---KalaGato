import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import {productAction} from '../../store/product-slice'

const CartItem = (props) => {
    const dispatch = useDispatch();

    const { title, description, price, id, category, total, quantity, brand, thumbnail } = props.item;
    console.log(title, description, price, id, category, total, quantity,brand, thumbnail);

    const addToCartHandler = () => {
        dispatch(productAction.addCartItems({
          id,
          title,
          description,
          thumbnail,
          price,
          brand,
          category
      }))
    }
    
    const removeFromCartHandler = () => {
      dispatch(productAction.removeItemToCart({
        id,
    }))
    }

    return (
        <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total}{' '}
            <span className={classes.itemprice}>(${price}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeFromCartHandler}>-</button>
            <button onClick={addToCartHandler}>+</button>
          </div>
        </div>
      </li>
    )
}

export default CartItem;