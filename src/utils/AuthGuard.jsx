import React from "react";
import { useGlobalState } from "../store";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  const [currentUser] = useGlobalState("currentUser");
  return !currentUser ? <Navigate to={"/signup"} /> : <Outlet />;
};

export default AuthGuard;
