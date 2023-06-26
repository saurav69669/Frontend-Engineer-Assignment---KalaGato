import CartItem from '../Components/Cart/CartItem';
import {useSelector} from 'react-redux';
import classes from './Cart.module.css';
import Card from '../Components/UI/Card';

const Cart = () => {
    const cartItems = useSelector(state => state.product.cartItems)

   return (
    <>
    
    <section className={classes.cartWrapper}>
    <h2 className={classes.cartHeading}>Your Shopping Cart</h2> 
    {!cartItems.length && <Card><h2>No Items in Cart 🤷‍♂️</h2></Card> }
    <ul>
      {cartItems.map((item) => (
        <CartItem
        key={item.id}
        item={{ title: item.title, description: item.description, thumbnail: item.thumbnail, price: item.price, id: item.id, brand: item.brand, category: item.category, total: item.totalPrice, quantity: item.quantity }}
      />
      ))}
    </ul>
    </section>

    <footer className={classes.footerSection}>
            <div>Developed by Sourabh Yadav</div>
    </footer>
    </>
  )
}

export default Cart;