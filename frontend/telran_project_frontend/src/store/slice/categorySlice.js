import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch("http://localhost:3333/categories/all");
      if (!resp.ok) {
        throw new Error("Server error");
      }
      const data = await resp.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = [
  {
    "id": 1,
    "title": "Annuals",
    "image": "/category_img/1.jpeg",
    "createdAt": "2022-10-02T14:43:29.000Z",
    "updatedAt": "2022-10-02T14:43:29.000Z"
  },
  {
    "id": 2,
    "title": "Nursery",
    "image": "/category_img/2.jpeg",
    "createdAt": "2022-10-02T14:43:29.000Z",
    "updatedAt": "2022-10-02T14:43:29.000Z"
  },
  {
    "id": 3,
    "title": "Garden Art",
    "image": "/category_img/3.jpeg",
    "createdAt": "2022-10-02T14:43:29.000Z",
    "updatedAt": "2022-10-02T14:43:29.000Z"
  },
  {
    "id": 4,
    "title": "Plant Care",
    "image": "/category_img/4.jpeg",
    "createdAt": "2022-10-02T14:43:29.000Z",
    "updatedAt": "2022-10-02T14:43:29.000Z"
  },
  {
    "id": 5,
    "title": "Seasonal",
    "image": "/category_img/5.jpeg",
    "createdAt": "2022-10-02T14:43:29.000Z",
    "updatedAt": "2022-10-02T14:43:29.000Z"
  }
]

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    list: initialState,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.status = "resolve";
        state.list = payload;
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});

export default categorySlice.reducer;
