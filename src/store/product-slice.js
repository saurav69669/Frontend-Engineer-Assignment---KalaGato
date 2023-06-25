import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        totalQuantity: 0,
        cartItems: [],
        cartQuantity: 0,
    },
    reducers: {
        addProductData(state, action) {
            //  console.log(action);
            state.items = action.payload.items;
            state.totalQuantity = action.payload.items.length;
            // console.log(state.items);
        },
        addCartItems(state,action) {
            console.log(action);
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id)
            state.totalQuantity++;
            state.cartQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    title: newItem.title,
                    description: newItem.description,
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    brand:newItem.brand,
                    category: newItem.category
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            // state.cartItems.push(action.payload);
            // state.cartQuantity = state.cartQuantity + 1; 
        }
    }
})

export const productAction = productSlice.actions;

export default productSlice;