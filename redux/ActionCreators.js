import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment

});


export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {

    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),

    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'    // node.js part of the course 
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {
      console.log('Post comments ', error.message)
      alert('Your comment could not be posted\nError: ' + error.message)
    })

}


//this is thunk: fetchDishes going to return a function (dispatch), 
//inside with there is another inner function .,
//it also gets acccess to dispatch and also gets staete if required, not performed here. 
export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'dishes')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())       //dihes are converted to json form, means the response is cnverted to json form. 
    .then(dishes => dispatch(addDishes(dishes)))        // now, dispatched / pushed to the redux store
    .catch(error => dispatch(dishesFailed(error.message)));

  //setTimeout(() => {
  //    dispatch(addDishes(DISHES));
  //}, 2000);                                    was a stimulated server, now its replaced by original server.
  //2000 milli seocnd delay inlading dishes

}

//inform somebody saying that the dishes are beginning to be loaded and 
//so you need to wait for the dishes to be loaded. 
//So, that's the interpretation that we're going to give to this function down here.
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING

});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({

  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({

  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

//Promotiions same as for dishes
export const fetchPromos = () => (dispatch) => {

  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())      //promotions are converted to json form, means the response is cnverted to json form. 
    .then(promos => dispatch(addPromos(promos)))        // now, dispatched / pushed to the redux store
    .catch(error => dispatch(promosFailed(error.message)));
}

//inform  saying that the promotions are beginning to be loaded and 
//so you need to wait for the promotions to be loaded. 
//So, that's the interpretation that we're going to give to this function down here.
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});


export const fetchLeads = () => (dispatch) => {

  dispatch(leadsLoading());

  return fetch(baseUrl + 'leaders')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())      //LEaders are converted to json form, means the response is cnverted to json form. 
    .then(leads => dispatch(addLeads(leads)))        // now, dispatched / pushed to the redux store
    .catch(error => dispatch(leadsFailed(error.message)));
}


export const leadsLoading = () => ({
  type: ActionTypes.LEADS_LOADING
});

export const addLeads = (leads) => ({
  type: ActionTypes.ADD_LEADS,
  payload: leads
});

export const leadsFailed = (errmess) => ({
  type: ActionTypes.LEADS_FAILED,
  payload: errmess
});

//feedback nhi sare credentials alag alag jaenge

export const postFeedback = (firstname,
  lastname,
  telnum,
  email,
  agree,
  contactType,
  message) => (dispatch) => {

    const newFeedback = {
      firstname: firstname,
      lastname: lastname,
      telnum: telnum,
      email: email,
      agree: agree,
      contactType: contactType,
      message: message
    }

    return fetch(baseUrl + 'feedback', {
      method: 'POST',
      body: JSON.stringify(newFeedback),

      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'    // node.js part of the course 
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(response => response.json())
      .then(response => alert('Thank you for your feedback!\n' + JSON.stringify(response))
      )
      .catch(error => {
        console.log('Post Feedback ', error.message)
        alert('Your feedback could not be posted\nError: ' + error.message)
      })

  };