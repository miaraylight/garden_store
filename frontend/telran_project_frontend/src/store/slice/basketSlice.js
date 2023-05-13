import { createSlice } from "@reduxjs/toolkit";



export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        list: [
            {
                categoryId: 1,
                count: 1,
                createdAt: "2022-10-02T14:43:29.000Z",
                description: "We love this fusion of colorful blossoms, created by combining some of the most floriferous and high performance annuals we know in our Savannah Summer Collection. Cherry-red Zinnia and sunrise-hued Lantana provide a perpetual fountain of flowers amidst the dark purple spiky foliage of Tradescantia.",
                discont_price: 50,
                final_price: 50,
                id: 1,
                image: "/product_img/1.jpeg",
                price: 53,
                show: true,
                title: "Savannah Summer Annual Collection",
                updatedAt: "2022-10-02T14:43:29.000Z"
            }
        ]
    },
    reducers: {
        addItemToBasket(state, {payload}){
            const target = state.list.find(item => item.id === payload.product_id)
            if (target === undefined) {
               state.list = [...state.list, {id: payload.product_id, count: payload.product_count ?? 1}]
            }else{
                target.count += payload.product_count ?? 1
            }
            
        },
        deleteItemFromBasket(state, {payload}){
            
            state.list = state.list.filter(({id}) => id !== payload)
        },
        basketItemIncrement(state, {payload}){
            const target = state.list.find(({id}) => id === payload)
            target.count++
        },
        basketItemDecrement(state, {payload}){
            const target = state.list.find(({id}) => id === payload)
            target.count--
        }
    }
})

export const { addItemToBasket, deleteItemFromBasket, basketItemIncrement, basketItemDecrement } = basketSlice.actions
export default basketSlice.reducer