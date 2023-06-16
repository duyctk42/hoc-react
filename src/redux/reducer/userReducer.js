import { INCREMENT, DECREMENT } from "../action/counterAction";
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";
const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    rose: "",
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      console.log("check ", action);
      return {
        ...state,
        account: {
          access_token: action?.payload?.DT?.access_token,
          refresh_token: action?.payload?.DT?.refresh_token,
          username: action?.payload?.DT?.username,
          image: action?.payload?.DT?.image,
          rose: action?.payload?.DT?.rose,
        },
        isAuthenticated: true,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default userReducer;
