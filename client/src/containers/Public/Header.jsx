import React from "react";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
function Header() {
  return (
    <div className="w-1100 flex item-center justify-between">
      <img
        src={logo}
        alt="logo"
        className="w-[240px] h-[70px] object-contain"
      />
      <div className="flex items-center gap-1">
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
        />
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgColor="bg-[#3961fb]"
        />
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgColor="bg-secondary2"
        />
      </div>
    </div>
  );
}

export default Header;
