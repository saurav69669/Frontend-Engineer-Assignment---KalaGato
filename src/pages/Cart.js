import CartItem from '../Components/Cart/CartItem';
import Card from '../Components/UI/Card';
import {useSelector} from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.product.cartItems)
    console.log(cartItems);

   return (
    <Card>
    {/* <Card className={classes.cart}> */}
    <h2>Your Shopping Cart</h2> 
    <ul>
      {cartItems.map((item) => (
        <CartItem
        key={item.id}
        item={{ title: item.title, description: item.description, price: item.price, id: item.id, brand: item.brand, category: item.category, total: item.totalPrice, quantity: item.quantity }}
      />
      ))}
    </ul>
  </Card>
  )
}

export default Cart;