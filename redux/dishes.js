//REDUCRES FILE OF THE DISHES PART OF APPLICATION


// responsiblity of action creator to pass DISHES here in .
import * as ActionTypes from './ActionTypes';


// if the state is undefined , the default is return. , now no dishes being passed, 
//all work is done by action types and action creator. 
// default values in parameters , retruns, what passed as in parameters., fals if server fails to laod the dishes.
export const Dishes =(state = { isLoading: true, errMess: null, dishes: [] }, action) => {
    
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading: false, errMess: null, dishes: action.payload }

        case ActionTypes.DISHES_LOADING:
            // 3 dots are the sprint operator, which creates new state object n 
            //the params which we send are the changes made to the state , again the state is not 
            //mutated but a new object has been made and returned.
            return {...state,isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state,isLoading: false, errMess: action.payload , dishes: []}



        default:
            return state;
    }
}