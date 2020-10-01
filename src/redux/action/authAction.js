const login = (user) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST", payload: null });
  try {
    if (!user.email || !user.password) {
      // dispatch to authReducer
      console.log("herererere");
      dispatch({ type: "LOGIN_FAIL", payload: "YOU NEED EMAIL AND PASSWORD!" });
      return;
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL", payload: err.message });
  }
};

const logout = (user) => (dispatch) => {
  try {
    dispatch({ type: "LOGOUT", payload: "" });
  } catch (err) {
    console.log(err.message);
  }
};

export const authAction = {
  login,
  logout,
};
