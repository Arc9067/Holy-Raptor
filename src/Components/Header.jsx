import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="py-3 w-full bg-black">
      <nav className="container flex justify-between items-center">
        <a href="" className="text-4xl md:text-5xl capitalize">
          holy <span className="text-orange-400">raptor</span>
        </a>
        <div className="flex items-center gap-2">
          <a href="" className="text-3xl  transition duration-1000">
            <Icon icon="logos:ethereum-color" />
          </a>
          <a href="" className="text-5xl  transition duration-1000">
            <Icon icon="openmoji:twitter" />{" "}
          </a>
          <a href="" className="text-2xl  transition duration-1000">
            <Icon icon="logos:telegram" />{" "}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
