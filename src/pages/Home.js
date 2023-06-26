import classes from './Home.module.css';
import personalCare from '../Images/peronalCare.jpg';
import electronics from '../Images/electronics.jpg';
import essentials from '../Images/grocery.jpg';
import banner from '../Images/Home-Banner.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }

    return (
        <>
        <section className={classes.sectionWrapper}>
            <img alt='Home-banner' src={banner}></img>
            <button className={classes.shopButton} onClick={navigateHandler}>Shop Now</button>
        </section>

        <section className={classes.cardSection}>
            <h2>Explore More</h2>
            <div className={classes.homeCard}>
                <div className={classes.newCard}>
                    <img src={personalCare} alt="care"></img>
                    <div class="container">
                        <h4><b>Personal Care</b></h4>
                        <button className={classes.exploreButton} onClick={navigateHandler}>Explore Now</button>
                    </div>
                </div>

                <div className={classes.newCard}>
                    <img src={electronics} alt="electronics"></img>
                    <div class="container">
                        <h4><b>Electronics</b></h4>
                        <button className={classes.exploreButton} onClick={navigateHandler}>Explore Now</button>
                    </div>
                </div>

                <div className={classes.newCard}>
                    <img src={essentials} alt="essentials"></img>
                    <div class="container">
                        <h4><b>Home Essentials</b></h4>
                        <button className={classes.exploreButton} onClick={navigateHandler}>Explore Now</button>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
    

}

export default HomePage;