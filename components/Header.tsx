import React from "react";
import Logo from "./ui/Logo";

function Header() {
  return (
    <header className="bg-primary text-background container py-6">
      <Logo />
    </header>
  );
}

export default Header;
