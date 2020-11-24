import * as ActionTypes from './ActionTypes';

// if the state is undefined , the default is return. 
export const Promotions =(state = { 
    isLoading: true,
    errMess: null,
    promotions: []
    } , action) => {
    
    switch(action.type){

        case ActionTypes.ADD_PROMOS:
            return {...state,isLoading: false, errMess: null, promotions: action.payload }

        case ActionTypes.PROMOS_LOADING:
            // 3 dots are the sprint operator, which creates new state object n 
            //the params which we send are the changes made to the state , again the state is not 
            //mutated but a new object has been made and returned.
            return {...state,isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state,isLoading: false, errMess: action.payload , promotions: []}

        
        default:
            return state;
    }
}