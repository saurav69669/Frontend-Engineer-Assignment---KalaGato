import { useEffect } from "react";
import Products from "../Components/Shop/Products";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../store/product-Action";
import Footer from "../Components/Footer/Footer";

const ProductPage = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUserData())
    },[dispatch])

    return (
        <>
        <Products />
        <Footer />
        </>
    ) 
}

export default ProductPage;