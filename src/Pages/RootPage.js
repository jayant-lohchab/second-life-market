import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import MainFooter from "../components/MainFooter";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet/>
      </main>

      <MainFooter />
    </>
  );
};

export default RootPage;
