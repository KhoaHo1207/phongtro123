import React, { useState, useEffect } from "react";
import { Button, InputForm } from "../../components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { apiRegister } from "../../services/auth";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";
function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(location.state?.flag); //? mean la khi nao co gia tri -> choc vo thang ke tiep
  console.log(location.state);

  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });
  useEffect(() => {
    setRegister(location.state?.flag);
  }, [location.state?.flag]); //khi flag thay doi -> set lai

  // const handleSubmit = async () => {
  //   console.log(payload);
  //   const response = await apiRegister(payload); //khong phai {payload}, sau khi chay on chuyen qua redux
  //   console.log(response);
  // };
  const handleSubmit = async () => {
    console.log(payload);
    dispatch(actions.register(payload));
  };

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {register ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {register && (
          <InputForm
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            type={"name"}
          />
        )}
        <InputForm
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          type={"phone"}
        />
        <InputForm
          label={"MẬT KHẨU"}
          value={payload.password}
          setValue={setPayload}
          type={"password"}
        />
        <Button
          text={register ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={() => handleSubmit()}
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {register ? (
          <small>
            Bạn đã có tài khoản ?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => {
                setRegister(false);
              }}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[red] cursor-pointer">
              Bạn quên mật khẩu
            </small>
            <small
              className="text-[blue] hover:text-[red] cursor-pointer"
              onClick={() => {
                setRegister(true);
              }}
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
