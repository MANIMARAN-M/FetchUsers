// This is Action of the Reducer
export const SignUp = (UserName, UserMailId, UserPassword) => {
  return {
    type: "SIGN_UP",
    payload: {
      name: UserName,
      mailid: UserMailId,
      password: UserPassword,
      LoggedIn: true,
    },
  };
};
export const SignOut = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      LoggedIn: false,
    },
  };
};

// Api Reducer Actions
export const fetchUserRequest = () => {
  return {
    type: "API_USER_REQUEST",
  };
};
export const fetchUserSuccess = (data) => {
  return {
    type: "API_USER_SUCCESS",
    payload: data,
  };
};
export const fetchUserError = (data) => {
  return {
    type: "API_USER_ERROR",
    payload: data,
  };
};
export const fetchUpdatetor = (data) => {
  return {
    type: "API_USER_UPDATE",
    payload: data,
  };
};
export const fetchDelete = (data) => {
  return {
    type: "API_USER_DELETE",
    payload: data,
  };
};
export const fetchAddUsers = (data) => {
  return {
    type: "API_USER_ADD",
    payload: data,
  };
};
