import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice'
import categorySlice from './slice/categorySlice'
import basketSlice from './slice/basketSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
        basket: basketSlice
    }
})