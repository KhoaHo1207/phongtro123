import React, { useCallback } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import path from "../../routes";
function Header() {
  const { IoAddCircleOutline } = icons;
  const navigate = useNavigate();
  // const goLogin = useCallback(() => {
  //   const loginRoute = publicRoute.find((route) => route.path === "/login"); //tim duong dan /login
  //   navigate(loginRoute.path); //navigate dung de chuyen trang
  // }, []);
  const goLogin = useCallback(() => {
    navigate(path.LOGIN); //navigate dung de chuyen trang
  }, []);
  return (
    <div className="w-1100 flex item-center justify-between">
      <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain"
      />
      <div className="flex items-center gap-1">
        <small>Phong tro 123.com xin chao !!!</small>
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin} //Chuyen sang trang login
        />
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={goLogin} //Chuyen sang trang login
        />
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-secondary2"
          IcAfter={IoAddCircleOutline} //Add icon
        />
      </div>
    </div>
  );
}

export default Header;
