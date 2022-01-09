import React from "react";
import s from "./Staff.module.css";

function Left_StaffList({ todos, current_person }) {
  const handleClick = (clicked_person) => {
    current_person(clicked_person); // для передачи текущего человека в верх по DOM
  };
  const [input, setInput] = React.useState("");

  return (
    <>
      <input
        placeholder="поиск"
        className="searching_div"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <h2 className={s.title}>Весь персонал</h2>
      {!todos.length ? (
        <div>
          <div className={s.schedule_block}>
            <h1>No staff</h1>
          </div>
        </div>
      ) : (
        <div className={s.schedule_block}>
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

                <img className={s.photo} alt="" src={todo.file} />
                {/* <img className={s.photo} alt="" src={todo.file}/> */}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default Left_StaffList;
