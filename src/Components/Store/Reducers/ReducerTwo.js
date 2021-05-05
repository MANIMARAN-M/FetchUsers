const initialState = {
  isLoading: false,
  users: [],
  userFilter: [],
  error: "",
};
const ApiCalling = (state = initialState, action) => {
  switch (action.type) {
    case "API_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "API_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: "",
      };
    case "API_USER_ERROR":
      return {
        ...state,
        isLoading: false,
        users: [],
        error: action.payload,
      };
    case "API_USER_UPDATE":
      return {
        ...state,
        users: state.users.map((el) => {
          if (action.payload.id === el.id) {
            return {
              ...el,
              name: action.payload.name,
              email: action.payload.email,
            };
          }
          return el;
        }),
      };
    case "API_USER_DELETE":
      return {
        ...state,
        users: state.users.filter((el) => el.id !== action.payload),
      };
    case "API_USER_ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
export default ApiCalling;
