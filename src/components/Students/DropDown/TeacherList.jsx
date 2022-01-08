import React, { useState } from "react";
import { Data } from "../../Data";

const TeacherList = () => {
  const [click, setClick] = useState(true);
  const handleClick = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <div className="groups_flex">
      <ul className="projects_div">
        {Data.map((item, index) => {
          return (
            <div>
              <div
                className="project"
                onClick={() => handleClick(index)}
                key={index}
              >
                {item.subject}
              </div>
              {click === index ? (
                <ul className="viezj_spisok">
                  <a href="">
                    <div className="viezj_odin_uchit">
                      {item.teachers.tutor_1}
                    </div>
                  </a>
                  <a href="">
                    <div className="viezj_odin_uchit">
                      {item.teachers.tutor_2}
                    </div>
                  </a>
                  <a href="">
                    <div className="viezj_odin_uchit">
                      {item.teachers.tutor_3}
                    </div>
                  </a>
                </ul>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
