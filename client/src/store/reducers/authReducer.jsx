//dung de xac thuc

import actionTypes from "../actions/actionTypes";
const iniState = {
  isLoggedIn: false, //false -> chua dang nhap
  token: null, // luu JWT
  msg: "",
};
//persist duoi local storage
const authReducer = (state = iniState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
        msg: "",
      };

    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        msg: action.data,
        token: null,
      };
    default:
      return state;
  }
};
//actionb nhan thong ham dispatch

export default authReducer;
