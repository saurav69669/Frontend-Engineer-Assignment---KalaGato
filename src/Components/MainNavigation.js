import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'
import CartButton from "./Cart/CartButton";
import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
    const navigate = useNavigate();

    const navigateHandler = (event) => {
        event.preventDefault();
        navigate('/')
    }

    return <header className={classes.header}>
    
        <a href="/" className={classes.headerLogo} onClick={navigateHandler}>Store</a>
        <nav>
            <ul className={classes.list}>
                <li className={classes.displayNone}> <NavLink className={({isActive}) => (isActive ? classes.active : undefined)} end={true} to='/'>Home</NavLink> </li>
                <li> <NavLink className={({isActive}) => (isActive ? classes.active : undefined)} to='/products'>Products</NavLink> </li>
                
            </ul>
        </nav>
        <ul>
            <li><CartButton /></li>
        </ul>
    </header>
}

export default MainNavigation;