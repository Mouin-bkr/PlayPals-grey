"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.jpeg";
import data from "./data"; // Adjust path if needed
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav__container">
        {/* Logo on the left */}
        <Link href="/" className="nav__logo">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </Link>

        {/* Navigation Menu */}
        <div className="nav__menu">
          {data.map((item) => (
            <Link key={item.id} href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right-side buttons */}
        <div className="nav__actions">
          <Link href="/request-demo" className="btn request-demo">
            Request Demo
          </Link>
          <Link href="/login" className="btn login">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
