import React, { Fragment } from "react";
import Topbar from "../Appbars/Topbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Topbar />

      <div className="max-w-screen-sm mx-auto mt-20 shadow-sm p-5 bg-white dark:bg-gray-800 dark:text-white min-h-screen">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
