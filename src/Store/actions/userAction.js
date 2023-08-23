export const setUser = (user) => (dispatch) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  export const setToken = (token) => (dispatch) => {
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
  };

  export const removeToken = () => (dispatch) => {
    dispatch({
        type: "REMOVE_TOKEN",
    });
  };
