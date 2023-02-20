
import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
type Props = { children?: React.ReactNode };
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <div className=" mx-auto">
        <NavBar />
        {children}
        {/* <Footer/> */}
      </div>
    </React.Fragment>
  );
};