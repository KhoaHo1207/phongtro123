//dung de xac thuc

const iniState = {
  isLoggedIn: false, //false -> chua dang nhap
  token: 1234, // luu JWT
};
//persist duoi local storage
const authReducer = (state = iniState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//actionb nhan thong ham dispatch

export default authReducer;
