import React from "react";
import s from "./Staff.module.css";

function Left_StaffList({ todos, current_person }) {
  const handleClick = (clicked_person) => {
    current_person(clicked_person)// для передачи текущего человека в верх по DOM
  };
  return (
    <>
      {todos.map((todo, index) => (
        <div
          className={s.one_item_flex}
          onClick={() => handleClick(todo)}
          key={index}
        >
          <div>
            <span className={s.name}>{todo.name}</span>&nbsp;
            <span className={s.name}>{todo.surName}</span>&nbsp;
            <span className={s.name}>{todo.thirdName}</span>&nbsp;
            <div className={s.subject}>{todo.subject}</div>
            <div className={s.number}>{todo.number}</div>
            <div className={s.birth}>{todo.year}</div>
          </div>
          
          <img className={s.photo} alt="" src={todo.file}/>
          {/* <img className={s.photo} alt="" src={todo.file}/> */}
        </div>
      ))}
    </>
  );
}

export default Left_StaffList;
