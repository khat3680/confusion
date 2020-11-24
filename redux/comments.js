import * as ActionTypes from './ActionTypes';


// if the state is undefined , the default is return. 
export const Comments =(state = {
    errMess: null,
    comments: [],
    }, action) => {
    
    switch(action.type){

        case ActionTypes.ADD_COMMENTS:
            return {...state,isLoading: false, errMess: null, comments: action.payload }

        case ActionTypes.COMMENTS_FAILED:
            return {...state,isLoading: true, errMess: action.payload , comments: []}
        

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
        
            return {...state, comments: state.comments.concat(comment)};  //changed due to change in state params


            // So now, you see how we can implement a reducer function which will not change, 
            //or mutate the state but instead creates a new copy of the state and then 
            //returns that value from the reducer function here.

            // new object is created, by adding a new comment to the COMMENTS array in javascript. 
            //Making it an immutable object on the state, since we can't immute the state
        default:
            return state;
    }
} 