import * as authService from "../services/auth";

export const register = async (req, res) => {
  //nhan du lieu tu router (req) va chuyen den service (res), xu ly xong tra ve lai controller, roi tra ve lai router (chi la thang chuyen huong)
  // ban chat cua dang ky la form co name, phone and password
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password)
      return res.status(400).json({
        err: 1, //so duong loi client
        msg: "Missing inputs",
      });

    const response = await authService.registerService(req.body); //nhan response va truyen qua ong registerService
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1, //so am loi server
      msg: "Faith at auth controller " + error,
    });
  }
};

export const login = async (req, res) => {
  //nhan du lieu tu router (req) va chuyen den service (res), xu ly xong tra ve lai controller, roi tra ve lai router (chi la thang chuyen huong)
  // ban chat cua dang ky la form co name, phone and password
  const { phone, password } = req.body;
  try {
    if (!phone || !password)
      return res.status(400).json({
        err: 1, //so duong loi client
        msg: "Missing inputs",
      });

    const response = await authService.loginService(req.body); //nhan response va truyen qua ong registerService
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1, //so am loi server
      msg: "Faith at auth controller " + error,
    });
  }
};
