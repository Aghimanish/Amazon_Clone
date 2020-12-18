export const initialState={
    basket:[],
<<<<<<< HEAD
    user:null
=======
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item)=> item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
<<<<<<< HEAD
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index>0){
                newBasket.splice(index, 1);

            }else{
                console.warn(`Cant remove product (id:${action.id}) as it is not in the basket!!`)
            }
            return{
                ...state,
                basket:newBasket
            }
            case 'SET_USER':
                return{
                    ...state,
                    user:action.user
                }
            default:
                return state;
            }
            
}
=======
            default:
                return state;
    }
};
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3

export default reducer;