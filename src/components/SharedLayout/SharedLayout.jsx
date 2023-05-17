import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
