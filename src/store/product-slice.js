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
            state.items = action.payload.items;
            state.totalQuantity = action.payload.items.length;
        },

        addCartItems(state,action) {
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
        },

        removeItemToCart(state,action) {
            const newItem = action.payload;
            console.log(newItem);
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.quantity--;

            if (existingItem.quantity === 1) {
                state.cartQuantity--;
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id);
            }
            else {
                existingItem.quantity--;
                state.cartQuantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
})

export const productAction = productSlice.actions;

export default productSlice;