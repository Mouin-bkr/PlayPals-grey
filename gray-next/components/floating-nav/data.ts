import React from "react";
import { AiFillHome, AiFillAppstore, AiFillMessage } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";

interface NavItem {
  id: number;
  link: string;
  icon: React.ReactNode;
}

const data: NavItem[] = [
  { id: 1, link: "/", icon: React.createElement(AiFillHome) },
  { id: 2, link: "#about", icon: React.createElement(BsPersonFill) },
  { id: 3, link: "#services", icon: React.createElement(MdHomeRepairService) },
  { id: 4, link: "#portfolio", icon: React.createElement(AiFillAppstore) },
  { id: 5, link: "#contact", icon: React.createElement(AiFillMessage) },
];

export default data;
