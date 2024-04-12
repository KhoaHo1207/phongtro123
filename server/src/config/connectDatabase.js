// const { Sequelize } = require("sequelize");
import { Sequelize } from "sequelize";
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("phongtro123", "root", null, {
  //tendb, username, passwords
  host: "localhost",
  dialect: "mysql", //loai db
  logging: false, //khong log nhung thu can thiet ra terminal
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDatabase;
