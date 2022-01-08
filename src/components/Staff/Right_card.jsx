import React from 'react'
import s from "./Staff.module.css";

function Right_card({pers}) {
  console.log(pers);
    return (
        <div className={s.card}>
            <div className={s.card_title}>Personal info</div>
            <div>
              <div className={s.top_card_flex}>
                <div>
                  <div className={s.card_photo_div}><img className={s.card_photo} src={pers.file} alt="" /></div>
                </div>
                <div>
                  <div className={s.card_name}>{pers.name}</div><br />
                  <div className={s.card_name}>{pers.surName}</div><br />
                  <div className={s.card_name}>{pers.thirdName}</div>
                </div>
              </div>
              <li className={s.card_bot_info}>Subject: {pers.subject}</li>
              <li className={s.card_bot_info}>number: {pers.number}</li>
              <li className={s.card_bot_info}>year: {pers.year}</li>
              {/* <li className={s.card_bot_info}>Groups: {pers.name}</li> */}
              {/* <li className={s.card_bot_info}>Work days:{pers.name}</li> */}
              {/* <li className={s.card_bot_info}>photo: {pers.file}</li> */}
              {/* <li className={s.card_bot_info}>Work time: {pers.name}</li> */}
            </div>
          </div>
    )
}

export default Right_card
