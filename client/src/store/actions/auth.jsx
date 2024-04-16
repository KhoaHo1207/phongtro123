import actionTypes from "./actionTypes";
import { apiRegister } from "../../services/auth";

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } //truong hop khong loi
    else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      }); //dung redux, khi dispacth len reducer phai co type
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    }); //dung redux, khi dispacth len reducer phai co type
  }
};
//tra ve 1 objectt
