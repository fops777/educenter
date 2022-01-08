import React from "react";
import s from "./Students.module.css";

function StudentsList({ todos, current_person }) {
  const handleClick = (clicked_person) => {
    current_person(clicked_person)// для передачи текущего человека в верх по DOM
  }
  return (
    <div>
      <h1 className={s.card_title}>Students List</h1>
      <div className={s.students_list_block}>
        {todos.map((todo, index) => (
          <div
            onClick={() => handleClick(todo)}
            className={s.studList_flex}
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

            <img className={s.photo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsList;
