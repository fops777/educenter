import React from "react";
import TeacherList from "./DropDown/TeacherList";
import Modal from "./Modal/Modal";
import StudentsList from "./StudentsList";
import Right_card_stud from "./Right_card_stud";
import s from "./Students.module.css";

const Students = () => {
  const [modalActive, setModalActive] = React.useState(false); //показ/скрыть окно
  const [one_pers, setOne_pers] = React.useState([]); //person которого передаем в <Right_card />
  const [todos, setTodos] = React.useState([
    {
      name: "Andersen",
      surName: "Radrigess",
      thirdName: "Jenipher",
      subject: "Japan",
      number: "(99)233-63-30",
      year: "1999",
    },
    {
      name: "John",
      surName: "Riddle",
      thirdName: "Fatherevich",
      subject: "English",
      number: "(90)123-45-76",
      year: "1998",
    },
  ]);
  const [input, setInput] = React.useState("");

  const current_person_func = (curr_pers) => {
    setOne_pers(curr_pers);
  };
  const createPost = (newPost) => {
    setTodos([...todos, newPost]);
  };
  const del_pers = (todo) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="students_content">
      <div className="stud_top_flex">
        <input //Search input
          placeholder="поиск"
          className={s.searching_div}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button //Добавить ученика+
          onClick={() => {
            setModalActive(true);
          }}
          className="add_student_button"
        >
          Добавить ученика +
        </button>
        <Modal //Modal
          active={modalActive}
          setActive={setModalActive}
          create={createPost}
        />
      </div>
      <div className="stud_mid_flex">
        <TeacherList />
        <StudentsList
          todos={todos}
          current_person={current_person_func}
          input={input}
        />
        <Right_card_stud 
          pers={one_pers} 
          curr_pers_to_del={del_pers} 
        />
      </div>
    </div>
  );
};

export default Students;
