import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
