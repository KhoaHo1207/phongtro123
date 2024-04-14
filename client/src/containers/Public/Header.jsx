import React, { useCallback } from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate, Link } from "react-router-dom";
import path from "../../routes";
function Header() {
  const { IoAddCircleOutline } = icons;
  const navigate = useNavigate();
  // const goLogin = useCallback(() => {
  //   const loginRoute = publicRoute.find((route) => route.path === "/login"); //tim duong dan /login
  //   navigate(loginRoute.path); //navigate dung de chuyen trang
  // }, []);
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } }); //navigate dung de chuyen trang
  }, []);
  return (
    <div className="w-1100 flex item-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[240px] h-[70px] object-contain"
        />
      </Link>
      <div className="flex items-center gap-1">
        <small>Phong tro 123.com xin chao !!!</small>
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(false)} //Chuyen sang trang login
        />
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
          onClick={() => goLogin(true)} //Chuyen sang trang login
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
