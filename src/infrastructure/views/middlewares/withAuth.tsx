import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCookie } from "../../../utils/utils";
import { RootState } from "../../redux/store";

export function withAuth(Component: ReactNode) {
  const user = useSelector((state: RootState) => state.user.user);
  const isAuth = getCookie("token");
  if (isAuth) {
    // if (!user.login) {
    //   return <Navigate to="/login" />
    // }
    return Component;
  }
  return <Navigate to="/login" />;
}
