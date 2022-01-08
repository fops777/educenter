import React from "react";
import Search from "../Search";
import PersonalData from "../PersonalData";
import TeacherList from "./DropDown/TeacherList";
import Modal from "./Modal/Modal";
import StudentsList from "./StudentsList";
import Right_card from "../Staff/Right_card";

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

  const current_person_func = (curr_pers) => {
    setOne_pers(curr_pers);
  };
  const createPost = (newPost) => {
    setTodos([...todos, newPost]);
  };

  return (
    <div className="students_content">
      <div className="stud_top_flex">
        <Search />
        <button
          onClick={() => {
            setModalActive(true);
          }}
          className="add_student_button"
        >
          Добавить ученика +
        </button>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          create={createPost}
        />
      </div>
      <div className="stud_mid_flex">
        <TeacherList />
        <StudentsList todos={todos} current_person={current_person_func} />
        <div className="personal_data">
          <Right_card pers={one_pers}/>
          {/* <PersonalData /> */}
        </div>
      </div>
    </div>
  );
};

export default Students;
