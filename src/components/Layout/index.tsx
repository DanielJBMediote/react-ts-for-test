import Header from "components/Header";
import Sidebar from "components/Sidebar";
import { NextPage } from "next";
import React from "react";
import Navbar from "~/components/Navbar";

const Layout: NextPage = ({ children }) => {
  function render(): JSX.Element {
    return (
      <>
        <Header />
        <div className="w-screen h-screen bg-background-dark">
          <Navbar />
          <div className="flex gap-2">
            <Sidebar />
            <div className="relative w-full h-full">{children}</div>
          </div>
        </div>
      </>
    );
  }

  return render();
};

export default Layout;
