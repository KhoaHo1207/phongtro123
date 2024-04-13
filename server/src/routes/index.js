import authRouter from "./auth";

const initRoutes = (app) => {
  //nhan app lam doi so
  app.use("/api/v1/auth", authRouter); //route: /api/v1/auth -> chay vao authRouter -> map chu Login -> tao api cho login
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;

//ham nay chya -> chua tat ca cac route
