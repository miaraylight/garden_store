import { createSlice } from "@reduxjs/toolkit";

const savedDataFromLocalStorage = JSON.parse(localStorage.getItem('basket')) ?? [];
const saveDataToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket))

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        list: savedDataFromLocalStorage
    },
    reducers: {
        addItemToBasket(state, {payload}){
            const target = state.list.find(item => item.id === payload.product_id)
            if (target === undefined) {
                const newItem = {id: payload.product_id, count: payload.product_count ?? 1}
               state.list = [...state.list, newItem]
               saveDataToLocalStorage([...state.list, newItem])
            }else{
                target.count += payload.product_count ?? 1
                saveDataToLocalStorage([...state.list])
            }
            
        },
        deleteItemFromBasket(state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
            saveDataToLocalStorage([...state.list])
        },
        basketItemIncrement(state, {payload}){
            const target = state.list.find(({id}) => id === payload)
            target.count++
            saveDataToLocalStorage([...state.list])
        },
        basketItemDecrement(state, {payload}){
            const target = state.list.find(({id}) => id === payload)
            target.count--
            saveDataToLocalStorage([...state.list])
        }
    }
})

export const { addItemToBasket, deleteItemFromBasket, basketItemIncrement, basketItemDecrement } = basketSlice.actions
export default basketSlice.reducer