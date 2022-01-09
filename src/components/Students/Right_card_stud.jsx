import React from "react";
import s from "./Students.module.css";

function Right_card_stud({ pers, curr_pers_to_del }) {
  const handleClick = (clicked_person) => {
    curr_pers_to_del(clicked_person); // для передачи текущего человека в верх по DOM
  };
  return (
    <div className={s.card}>
      <div className={s.card_title_right}>Personal info</div>
      <div>
        <div className={s.top_card_flex}>
          <div>
            <div className={s.card_photo_div}>
              <img className={s.card_photo} src={pers.file} alt="" />
            </div>
          </div>
          <div>
            <div className={s.card_name}>{pers.name}</div>
            <br />
            <div className={s.card_name}>{pers.surName}</div>
            <br />
            <div className={s.card_name}>{pers.thirdName}</div>
          </div>
        </div>
        <li className={s.card_bot_info}>Subject: {pers.subject}</li>
        <li className={s.card_bot_info}>number: {pers.number}</li>
        <li className={s.card_bot_info}>year: {pers.year}</li>
        <button onClick={() => handleClick(pers)} className={s.del_button}>
          delete &#10006;
        </button>
      </div>
    </div>
  );
}

export default Right_card_stud;
