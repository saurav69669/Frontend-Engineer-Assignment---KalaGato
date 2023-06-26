import classes from './CartButton.module.css';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cart from "../../Images/shopping-cart.png";

const CartButton = () => {
    const navigate = useNavigate();
    const totalQuantity = useSelector(state => state.product.cartQuantity)

    const navigateHandler = () => {
        navigate('/cart');
    }

    return (
    <button className={classes.button} onClick={navigateHandler}>
        <img alt='cart' src={cart}></img>
        <span className={classes.badge}>{totalQuantity}</span>
    </button>
    )
}

export default CartButton;