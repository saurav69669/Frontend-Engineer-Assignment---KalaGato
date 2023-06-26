import { NavLink } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/');
    }

    return (
    <>
    <MainNavigation />
    <main>
    <h1>Error Page❌</h1>
    <NavLink onClick={navigateHandler}>Go to Home Page</NavLink>
    </main>
    </>
     )
}

export default ErrorPage;