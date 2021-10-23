import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
  quantity: 1,
  cardItems: [],
  _products: [],
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cardItems.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        state.cardItems[itemIndex].cartQuantity += 1
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cardItems.push(tempProduct)
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      state.cardItems = state.cardItems.filter(e => e.id !== item.id)
    },

    DECREASE_QUANTITY: (state, action) => {
      const itemIndex = state.cardItems.findIndex(cardItems => cardItems.id === action.payload.id)

      if (state.cardItems[itemIndex].cartQuantity > 1) {
        state.cardItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cardItems[itemIndex].cartQuantity === 1) {
        const nextCardItems = state.cardItems.filter((item) => item.id !== action.payload.id)
        state.cardItems = nextCardItems;
        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, INCREASE_QUANTITY, DECREASE_QUANTITY } = cartItemsSlice.actions

export default cartItemsSlice.reducer