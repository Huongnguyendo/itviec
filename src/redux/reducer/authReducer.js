const initialState = {
  user: {},
  loading: false,
  err: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_REQUEST":
      state.loading = true;
      return { ...state };
    case "LOGIN_SUCCESS":
      state.loading = false;
      state.user = payload;
      return { ...state };
    case "LOGIN_FAIL":
      state.loading = false;
      state.err = payload;
      return { ...state };

    case "LOGOUT":
      state.loading = false;
      state.user = {};
      return { ...state };
    default:
      return { ...state };
  }
};

export default authReducer;
