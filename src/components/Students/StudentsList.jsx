import React from "react";
import s from "./Students.module.css";

function StudentsList({ todos, current_person, input }) {
  const handleClick = (clicked_person) => {
    current_person(clicked_person); // для передачи текущего человека в верх по DOM
  };

  return (
    <div>
      <div className={s.card_title}>Students List</div>
      <div className={s.students_list_block}>
        {todos
          .filter((val) => {
            if (
              val.name.toLowerCase().includes(input.toLowerCase()) ||
              val.surName.toLowerCase().includes(input.toLowerCase()) ||
              val.thirdName.toLowerCase().includes(input.toLowerCase()) ||
              val.subject.toLowerCase().includes(input.toLowerCase())
            ) {
              return val;
            }
          })
          .map((todo, index) => (
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
