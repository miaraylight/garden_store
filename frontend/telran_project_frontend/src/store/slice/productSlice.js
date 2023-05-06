import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, {rejectWithValue}) => {
    try{
      const resp = await fetch('http://localhost:3333/products/all')
      if (!resp.ok) {
        throw new Error('Server error')
      }
      const data = await resp.json()
      const newData = data.map(item => ({...item, final_price: item.discont_price ?? item.price, show: true}))
      return newData
    }catch(error){
      return rejectWithValue(error.message)
    }
  }
)


export const productSlice = createSlice({
    name: 'product',
    initialState: {
      list: [
        
      ]
    },
    reducers: {
      sortByPrice(state, {payload}){
        if (payload === "lowToHigh") {
          state.list.sort((a, b) => a.final_price - b.final_price)
        }else if (payload === "highToLow") {
          state.list.sort((a, b) => b.final_price - a.final_price)
        }
      },
      filterByPriceRange(state, {payload}){
        state.list.forEach(item=> item.show = item.final_price >= payload[0] && item.final_price <= payload[1])
      }

    },
    extraReducers: ( builder ) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, {payload}) => {
          state.status = 'resolve'
          state.list = payload
        })
        .addCase(fetchProducts.rejected, (state, {payload}) => {
          state.status = 'rejected'
          state.error = payload
      })
    }
})

export const { sortByPrice, filterByPriceRange } = productSlice.actions
export default productSlice.reducer