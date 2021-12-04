import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
  cardItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.cardItems.findIndex((item) => item.id === action.payload.id)

      if (itemIndex >= 0) {
        console.log('1');
        state.cardItems[itemIndex].cartQuantity += 1
      } else {

        console.log("-1")
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cardItems.push(tempProduct)
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
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cardItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal
        },
        {
          total: 0,
          cartQuantity: 0
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem, INCREASE_QUANTITY, DECREASE_QUANTITY, getTotals } = cartItemsSlice.actions

export default cartItemsSlice.reducer