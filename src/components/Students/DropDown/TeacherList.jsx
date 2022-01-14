import React, { useState } from "react";


const TeacherList = () => {
  const [data, setData] = useState([
    {
        subject: 'Английский',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Русский',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Корейский',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Японский',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Китайский',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Математика',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Химия',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
    },
    {
        subject: 'Биология',
        teachers: {
            tutor_1: 'Нурсултан Абубакирович',
            tutor_2: 'Алексанра Волкина',
            tutor_3: 'Дмитрий Гордей'
        }
        }
])
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
        {data.map((item, index) => {
          return (
            <div>
              <div
                className="project"
                onClick={() => handleClick(index)}
                key={index}
              >
                {item.subject}
              </div>
              {/* {click === index ? (
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
              ) : null} */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
