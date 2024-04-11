import React from "react";
import { Home, Login, Header } from "../containers/Public";
const publicRoute = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];
const privateRoute = [];

export { publicRoute, privateRoute };
