import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    //signout
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //signin
  };
};

const signout = (dispatch) => {
  return () => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
