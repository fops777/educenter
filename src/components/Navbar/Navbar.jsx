import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import home from "../../media/home.png";
import pay from "../../media/pay.png";
import settings from "../../media/settings.png";
import stud from "../../media/stud.png";
import teach from "../../media/teachers.png";

const Navbar = () => {
  const items = [
    { pic: pay, name: "Оплата", dir: "/payment" },
    { pic: stud, name: "Студенты", dir: "/students" },
    { pic: teach, name: "Персонал", dir: "/contacts" },
    { pic: settings, name: "Настройки", dir: "/settings" },
  ];
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className={s.navbar}>
      <NavLink
        to="/"
        onClick={() => onSelectItem(null)}
        className={activeItem === null ? `${s.active}` : `${s.NavLink}`}
      >
        <p className={s.one_item}>
          <div>
            <img src={home}></img>
            <br />
          </div>
          <div>главная</div>
        </p>
      </NavLink>
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={`${item.dir}`}
          onClick={() => setActiveItem(index)}
          className={activeItem === index ? `${s.active}` : `${s.NavLink}`}
        >
          <p className={s.one_item}>
            <div>
              {<img src={item.pic}></img>}
              <br />
            </div>
            <div>{item.name}</div>
          </p>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
