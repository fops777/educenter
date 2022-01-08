import React, { useState } from "react";
import Search from "../Search";
import Modal from "./Modal/Modal";
import Right_card from "./Right_card";
import s from "./Staff.module.css";
import Left_StaffList from "./Left_StaffList";
import phot1 from '../../media/чел.jpg'
import phot2 from '../../media/cat.jpg'

const Staff = () => {
  const [todos, setTodos] = useState([
    {
      name: "John",
      surName: "Riddle",
      thirdName: "Fatherevich",
      subject: "English",
      number: "(90)123-45-76",
      year: '1998',
      file: phot1
    },
    {
      name: "Robert",
      surName: "Smith",
      thirdName: "Williams",
      subject: "Chinas",
      number: "(99)766-56-50",
      year: '1778',
      file: phot2
    },
  ]); //Список постов(2шт.)
  
  const [one_pers, setOne_pers] = useState([])//person которого передаем в <Right_card />
  const [modalActive, setModalActive] = React.useState(false); //показ/скрыть окно
  
  const createPost = (newPost) => {
    console.log(newPost);
    setTodos([...todos, newPost]);
  };
  const current_person_func = (curr_pers) => {
    setOne_pers(curr_pers)
  }

  return (
    <div className="body">
      <div className="stud_top_flex">
        <Search />
        <button onClick={() => {setModalActive(true)}} className="add_staff_button">Добавить сотрудника +</button>
        <Modal active={modalActive} setActive={setModalActive} create={createPost}/>
      </div>
      <div className={s.stud_mid_flex}>
        <div className={s.left_stud_part}>
          <h2 className={s.title}>Весь персонал</h2>
          <div className={s.schedule_block}>
            {todos.length ? <Left_StaffList todos={todos} current_person={current_person_func}/> : <h1>No staff!</h1>}
          </div>
        </div>
        <div className={s.right_stud_part}>
          <Right_card pers={one_pers}/>
        </div>
      </div>
    </div>
  );
};

export default Staff;
