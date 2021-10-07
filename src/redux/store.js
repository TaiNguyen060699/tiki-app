import { configureStore } from '@reduxjs/toolkit'
import CardItemSlice from './CardBook/cardItemSlice'

export const store = configureStore({
  reducer: {
    BookCard: CardItemSlice
  }
})