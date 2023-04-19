import { createSlice } from '@reduxjs/toolkit'

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
    name: 'category',
    initialState,
    reducers: {

    }
})

export default categorySlice.reducer

