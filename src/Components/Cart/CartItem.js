import classes from './CartItem.module.css'

const CartItem = (props) => {
    console.log(props);

    const { title, description, price, id, category, total, quantity } = props.item;
    console.log(title, description, price, id, category, total, quantity);

// const total = 20;
// const quantity = 1;
    const addToCartHandler = () => {
        // dispatch(cartAction.addItemToCart({
        //   id,title,price
        // }))
        console.log('Add to cart handler called!');
    }
    
    const removeFromCartHandler = () => {
    //   dispatch(cartAction.removeItemToCart(id))
    console.log('Remove from Cart Handler called!');
    }

    return (
        <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
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