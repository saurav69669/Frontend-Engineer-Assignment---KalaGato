import classes from './Home.module.css';

const HomePage = () => {
    return (
        <>
        {/* <h1>Home Page!🏠</h1> */}
        <section className={classes.sectionWrapper}>
            <button className={classes.shopButton}>Shop Now</button>
        </section>
        </>
    )
    

}

export default HomePage;