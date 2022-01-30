import React from "react";
import s from "./Students.module.css";

function StudentsList({ todos, current_person }) {
  const [input, setInput] = React.useState(""); //Search Input
  const handleClick = (clicked_person) => {
    current_person(clicked_person); // для передачи текущего человека в верх по DOM
  };
  
  todos.sort((a, b) => a.name.localeCompare(b.name)) //отсортировать по алфавиту

  return (
    <div>
      <input //Search input
        value={input}
        placeholder="поиск"
        className={s.searching_div}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div className={s.students_list_block}>
        {todos.length !== 0 ? (
          todos
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
                  <div className={s.birth}>{todo.today}</div>
                </div>
{                console.log('today in stud list', todo.today)}

                <img className={s.photo} alt="" />
              </div>
            ))
        ) : (
          <h1>No people</h1>
        )}
      </div>
    </div>
  );
}

export default StudentsList;
