const initialState = {
  pending: true,
  isLogin: false
}

const loggedUserReducer = (state = initialState, action) => {
  if (action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    })
  }
  if (action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      isLogin: action.isLogin
    })
  }
  return state;
}

export default loggedUserReducer;