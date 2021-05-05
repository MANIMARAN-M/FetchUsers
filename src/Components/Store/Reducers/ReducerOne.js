// First Reducer and it state
const initialState = {
  user: {},
};
const isLogged = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        user: action.payload,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default isLogged;
