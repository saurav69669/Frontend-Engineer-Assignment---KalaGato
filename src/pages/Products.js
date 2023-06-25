import { useEffect } from "react";
import Products from "../Components/Shop/Products";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../store/product-Action";

const ProductPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData())
    },[dispatch])

    return <Products />
}

export default ProductPage;