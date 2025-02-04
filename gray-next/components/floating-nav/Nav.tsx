import { ReactNode } from "react";

interface NavProps {
  item: {
    id: number;
    link: string;
    icon: ReactNode;
  };
}

const Nav = ({ item }: NavProps) => {
  return (
    <li>
      <a href={item.link}>{item.icon}</a>
    </li>
  );
};

export default Nav;
