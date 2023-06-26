import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home';
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {path:'/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    {path:'/', element: <HomePage />},
    {path: '/Products', element: <ProductPage />},
    {path: '/Cart', element: <Cart />}
  ]},
  
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
