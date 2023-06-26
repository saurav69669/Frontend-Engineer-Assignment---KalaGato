import { productAction } from "./product-slice";


export const fetchUserData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
           const response = await fetch('https://dummyjson.com/products');
        
           if (!response.ok) {
            throw new Error('could not fetch cart data.')
            }
        
           const data = await response.json();
           return data;
        };

        try {
            const userData = await fetchData();
            const totalProduct = userData.limit;

            const transformedProducts = userData.products.map((productData) => {
                      return {
                        id: productData.id,
                        title: productData.title,
                        description: productData.description,
                        price: productData.price,
                        discountPercentage: productData.discountPercentage,
                        rating: productData.rating,
                        stock: productData.stock,
                        brand: productData.brand,
                        category: productData.category,
                        thumbnail: productData.thumbnail,
                        images: productData.images,
                        totalProducts: totalProduct
                      }
                    })

            dispatch(productAction.addProductData({
                items: transformedProducts,
            }))

        } catch (error) {
              console.error(`error Occured: ${error}`)
        }
           
    }
}