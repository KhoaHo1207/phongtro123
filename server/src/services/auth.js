import db from "../models"; //choc zo mot folder -> lay index dau tien
import bcrypt from "bcryptjs";
import { response } from "express";
import jwt from "jsonwebtoken";
import { v4 } from "uuid";
require("dotenv").config();
// import { config } from "dotenv";
// config();

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12)); //dong bo, so cang lon, chuoi hash cang dai
// export const registerService = async ({ phone, password, name }) => {
//   //dung destructring
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.User.findOrCreate({
//         //find truoc
//         //response la 1 mang, phan tu thu 2 la false -> da ton tai, true la chua
//         where: { phone },
//         defaults: {
//           phone,
//           name,
//           password: hashPassword(password),
//           id: v4(),
//         },
//       }); //ham nay tim theo where, co thi khong tao moi
//       const token =
//         response[1] && //response la false -> gan false con khong tao token
//         jwt.sign(
//           { id: response[0].id, phone: response[0].phone },
//           process.env.SECRET_KEY,
//           { expiresIn: "2d" } //2 ngay token het han
//         ); //response[1] -> phan tu thu 2
//       resolve({
//         err: token ? 0 : 2,
//         msg: token
//           ? "Register is successfully !"
//           : "Phone number has been aldready used !",
//         token: token || null,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

export const registerService = async ({ phone, password, name }) => {
  try {
    const response = await db.User.findOrCreate({
      where: { phone },
      defaults: {
        phone,
        name,
        password: hashPassword(password),
        id: v4(),
      },
    });

    const token =
      response[1] &&
      jwt.sign(
        { id: response[0].id, phone: response[0].phone },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

    return {
      err: token ? 0 : 2,
      msg: token
        ? "Register is successfully !"
        : "Phone number has been already used !",
      token: token || null,
    };
  } catch (error) {
    throw error;
  }
};

export const loginService = async ({ phone, password }) => {
  try {
    const response = await db.User.findOne({
      where: { phone },
      raw: true, //response tra ve array khong lay duoc -> raw bang true tra ve object
    });
    //response true -> tim thay phone
    const isCorrectPassword =
      response && bcrypt.compareSync(password, response.password);
    const token =
      isCorrectPassword &&
      jwt.sign(
        { id: response.id, phone: response.phone },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

    return {
      err: token ? 0 : 2,
      msg: token
        ? "Login successfully !"
        : response
        ? "Password is wrong !"
        : "Phone number not found !",
      token: token || null,
    };
  } catch (error) {
    throw error;
  }
};
