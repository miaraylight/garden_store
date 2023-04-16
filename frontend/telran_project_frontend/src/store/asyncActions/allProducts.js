import { productsLoadAction } from "../reducers/productReducer";

const HOST = 'http://localhost:3333/';

// export const asyncLoadAllProductsAction = async (dispatch) => {
//     try {
//       const response = await fetch(`${HOST}products/all`);
//       const data = await response.json();
//       dispatch(productsLoadAction(data));
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

export const asyncLoadAllProductsAction = () => {
    return function(dispatch) {
        fetch(`${HOST}products/all`)
            .then(responce => responce.json())
            .then(json => dispatch(productsLoadAction(json)))
    }
}

// export const asyncLoadAllProductsAction = async(dispatch) => {
//     const responce = await fetch(`${HOST}products/all`);
//     const data = await responce.json();
//     data.then(products=>dispatch(productsLoadAction(products)))

    
// }
