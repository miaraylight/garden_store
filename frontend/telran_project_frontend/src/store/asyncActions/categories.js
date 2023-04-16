import { categoriesLoadAction } from "../reducers/categoriesReducer";

const HOST = 'http://localhost:3333';

// export const asyncLoadCategoriesAction = () => {
//     return function(dispatch) {
//         fetch(`${HOST}/categories/all`)
//             .then(responce => responce.json())
//             .then(json => 
//                 dispatch(categoriesLoadAction(json)))
//     }
// }

// export const asyncLoadCategoriesAction = async (dispatch) => {
//     try {
//       const response = await fetch(`${HOST}/categories/all`);
//       const data = await response.json();
//       dispatch(categoriesLoadAction(data));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };