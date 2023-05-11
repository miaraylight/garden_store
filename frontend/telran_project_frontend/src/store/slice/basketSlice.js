import { createSlice } from "@reduxjs/toolkit";



export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        list: []
    },
    reducers: {
        addItemToBasket(state, {payload}){
            state.list = [...state.list, payload]
            console.log(state.list);
        },
        deleteItemFromBasket(state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
        },
        basketItemIncrement(state, {payload}){
            state.list = state.list.find(({id}) => id === payload).count++
        },
        basketItemDecrement(state, {payload}){
            state.list = state.list.find(({id}) => id === payload).count--
        }
    }
})

export const { addItemToBasket, deleteItemFromBasket, basketItemIncrement, basketItemDecrement } = basketSlice.actions
export default basketSlice.reducer