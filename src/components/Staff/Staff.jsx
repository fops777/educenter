import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Right_card from "./Right_card";
import s from "./Staff.module.css";
import Left_StaffList from "./Left_StaffList";
import phot1 from "../../media/чел.jpg";
import phot2 from "../../media/cat.jpg";

const Staff = () => {
  const [todos, setTodos] = useState([
    {
      name: "John",
      surName: "Riddle",
      thirdName: "Fatherevich",
      subject: "English",
      number: "(90)123-45-76",
      year: "1998",
      file: phot1,
    },
    {
      name: "Robert",
      surName: "Smith",
      thirdName: "Williams",
      subject: "Chinas",
      number: "(99)766-56-50",
      year: "1778",
      file: phot2,
    },
  ]); //Список постов(2шт.)

  const [one_pers, setOne_pers] = useState([]); //person которого передаем в <Right_card />
  const [modalActive, setModalActive] = React.useState(false); //показ/скрыть окно

  //creating person
  const createPost = (newPost) => {
    console.log(newPost);
    setTodos([...todos, newPost]);
  };
  //to convey clicked person from left part to right
  const current_person_func = (curr_pers) => {
    setOne_pers(curr_pers);
  };
  //deleting person
  const del_pers = (todo) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="body">
      <div className="stud_top_fle">        
        <Modal
          active={modalActive}
          setActive={setModalActive}
          create={createPost}
        />
      </div>
      <div className={s.stud_mid_flex}>
        <div className={s.left_stud_part}>
              <Left_StaffList
                todos={todos}
                current_person={current_person_func}
              />
        </div>
        <div className={s.right_stud_part}>
          <Right_card setModalActive={setModalActive} pers={one_pers} curr_pers_to_del={del_pers} />
        </div>
      </div>
    </div>
  );
};

export default Staff;
