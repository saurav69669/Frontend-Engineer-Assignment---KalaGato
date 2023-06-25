import classes from './CartButton.module.css';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
    const navigate = useNavigate();

    const totalQuantity = useSelector(state => state.product.cartQuantity)
     console.log(totalQuantity);

    const navigateHandler = () => {
        console.log('Cart btn clicked!');
        navigate('/cart');
    }

    return (
    <button className={classes.button} onClick={navigateHandler}>
        <img alt='cart' src='../src/Images/shopping-cart.png'></img>
        <span className={classes.badge}>{totalQuantity}</span>
    </button>
    )
}

export default CartButton;