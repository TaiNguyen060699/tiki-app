import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quantity: 1,
  Carts: [],
  _products: [],
 
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const id = action.payload.id;
  
      let card = {
        id: newItem.id,
        quantity: 1,
        name: newItem.name,
        image: newItem.image,
        price: newItem.price,
        original_price: newItem.original_price,
        thumbnail_url: newItem.thumbnail_url
      }
      state.Carts.push(card)
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.Carts = state.Carts.filter(e => e.id !== item.id)
    },

    INCREASE_QUANTITY: (state) => {
      state.quantity -= 1
    },

    DECREASE_QUANTITY: (state) => {
      state.quantity += 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, INCREASE_QUANTITY, DECREASE_QUANTITY } = cartItemsSlice.actions

export default cartItemsSlice.reducer