"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-w-10">
      <button onClick={toggleNav} className="absolute -right-2 top-4">
        {isOpen ? <X /> : <Menu />}
      </button>
      <div
        className={` h-full w-52 bg-gray-200 px-4 py-20 ${isOpen ? "" : "hidden"}`}
      >
        SideNav
      </div>
    </div>
  );
}

export default SideNav;
