import React from "react";
import StudentsList from "./StudentsList";
import CreatingStud from "./AddStudent/CreatingStud";
import Right_card_stud from './Righ_side_Card/Right_card_stud';
import s from './Students.module.css'

const Students = () => {
  const [one_pers, setOne_pers] = React.useState([]); // Person которого передаем в <Right_card />
  const [allTodos, setAllTodos] = React.useState([]);  //Current Students List(в середине)
  const [showAllStud, setShowAllStud] = React.useState(false) // show/hide list of all students
  const [globalTodos, setGlobalTodos] = React.useState([
    {
      id: '213',
      name: "Andersen",
      surName: "Radrigess",
      thirdName: "Jenipher",
      subject: "English",
      number: "(99)233-63-30",
      year: "1999",
    },
      {
      id: '212',
      name: "Caden",
      surName: "Torres",
      thirdName: "Urijah ",
      subject: "English",
      number: "(98)987-45-12",
      year: "1995",
    },
      {
      id: '214',
      name: "Ulmer ",
      surName: "Rodriguez",
      thirdName: "Turner",
      subject: "English",
      number: "(87)131-85-64",
      year: "1986",
    },
      {
      id: '215',
      name: "Brandon ",
      surName: "Lee",
      thirdName: "Torres",
      subject: "English",
      number: "(99)123-19-28",
      year: "1982",
    },
      {
      id: '216',
      name: "Josue ",
      surName: "Patterson",
      thirdName: "Brown",
      subject: "English",
      number: "(92)46-45-44",
      year: "2001",
    },
      {
      id: '222',
      name: "Власова",
      surName: "Виктория",
      thirdName: "Егоровна",
      subject: "Русский",
      number: "(98)999-99-19",
      year: "1198",
    },
      {
      id: '221',
      name: "Ефремова",
      surName: "Алина",
      thirdName: "Евгеньевна",
      subject: "Русский",
      number: "(90)561-84-48",
      year: "1178",
    },
      {
      id: '220',
      name: "Максимов",
      surName: "Григорий",
      thirdName: "Артурович",
      subject: "Русский",
      number: "(98)456-60-50",
      year: "1996",
    },
    {
    id: '250',
    name: "Ян",
    surName: "Топлес",
    thirdName: "Огурцов",
    subject: "Корейский",
    number: "(98)623-26-55",
    year: "1987",
  },
    {
      id: '251',
    name: "Лазарев",
    surName: "Лев",
    thirdName: "Даниилович",
    subject: "Корейский",
    number: "(98)625-26-55",
    year: "1987",
  },
    {
      id: '252',
    name: "Чумакова",
    surName: "Софья",
    thirdName: "Ивановна",
    subject: "Корейский",
    number: "(98)625-26-55",
    year: "1987",
  },
    {
      id: '253',
    name: "Яремин",
    surName: "Артём",
    thirdName: "Давидович",
    subject: "Корейский",
    number: "(98)625-26-55",
    year: "1987",
  },
  {
    id: '254',
  name: "Степанов",
  surName: "Максим",
  thirdName: "Георгиевич",
  subject: "Корейский",
  number: "(98)625-26-55",
  year: "1987",
},
    {
      id: '230',
      name: "Ян",
      surName: "Топлес",
      thirdName: "Огурцов",
      subject: "Корейский",
      number: "(98)623-26-55",
      year: "1987",
    },
      {
        id: '231',
      name: "Лазарев",
      surName: "Лев",
      thirdName: "Даниилович",
      subject: "Корейский",
      number: "(98)623-26-55",
      year: "1987",
    },
      {
        id: '232',
      name: "Чумакова",
      surName: "Софья",
      thirdName: "Ивановна",
      subject: "Корейский",
      number: "(98)623-26-55",
      year: "1987",
    },
      {
        id: '233',
      name: "ЯЕремин",
      surName: "Артём",
      thirdName: "Давидович",
      subject: "Корейский",
      number: "(98)623-26-55",
      year: "1987",
    },
    {
      id: '240',
      name: "Яковлева  ",
      surName: "Милана",
      thirdName: "Марковна",
      subject: "Японский",
      number: "(98)623-26-55",
      year: "1987",
    },
      {
      id: '241',
      name: "Сурков ",
      surName: "Роман",
      thirdName: "Фёдорович",
      subject: "Японский",
      number: "(98)623-26-55",
      year: "1987",
    },
    {
      id: '260',
      name: "Никита",
      surName: "Камушкин",
      thirdName: "Помидоров",
      subject: "Математика",
      number: "(98)656-66-60",
      year: "1990",
    },
      {
      id: '261',
      name: "Колян",
      surName: "Пыжиков",
      thirdName: "Ералашович",
      subject: "Математика",
      number: "(98)278-70-78",
      year: "1998",
    },
    {
      id: '271',
      name: "Надоело",
      surName: "Придумывать",
      thirdName: "Имена",
      subject: "Химия",
      number: "(87)465-46-44",
      year: "1989",
    },
      {
      id: '270',
      name: "Тоже",
      surName: "Рандомное",
      thirdName: "Имя",
      subject: "Химия",
      number: "(87)465-46-44",
      year: "1989",
    },
    {
      id: '280',
      name: "Карасев",
      surName: "Егор",
      thirdName: "Маркович",
      subject: "Биология",
      number: "(98)156-12-52",
      year: "2002",
    },
      {
      id: '281',
      name: "Григорьев",
      surName: "Марк",
      thirdName: "Егорович",
      subject: "Биология",
      number: "(98)156-12-52",
      year: "2002",
    },
      {
      id: '282',
      name: "Селезнева",
      surName: "Элина",
      thirdName: "Александровна",
      subject: "Биология",
      number: "(98)156-12-52",
      year: "2001",
    },
      {
      id: '283',
      name: "Копылова",
      surName: "Анна",
      thirdName: "Давидовна",
      subject: "Биология",
      number: "(98)156-12-52",
      year: "2002",
    },
      {
      id: '284',
      name: "Прохорова ",
      surName: "Мария",
      thirdName: "Ярославовна",
      subject: "Биология",
      number: "(98)256-78-51",
      year: "2003",
    },
  ]);  // All people for global searching
  const [todosEng, setTodosEng] = React.useState([
    {
    id: '213',
    name: "Andersen",
    surName: "Radrigess",
    thirdName: "Jenipher",
    subject: "English",
    number: "(99)233-63-30",
    year: "1999",
  },
    {
    id: '212',
    name: "Caden",
    surName: "Torres",
    thirdName: "Urijah ",
    subject: "English",
    number: "(98)987-45-12",
    year: "1995",
  },
    {
    id: '214',
    name: "Ulmer ",
    surName: "Rodriguez",
    thirdName: "Turner",
    subject: "English",
    number: "(87)131-85-64",
    year: "1986",
  },
    {
    id: '215',
    name: "Brandon ",
    surName: "Lee",
    thirdName: "Torres",
    subject: "English",
    number: "(99)123-19-28",
    year: "1982",
  },
    {
    id: '216',
    name: "Josue ",
    surName: "Patterson",
    thirdName: "Brown",
    subject: "English",
    number: "(92)46-45-44",
    year: "2001",
  },
]);
  const [todosRus, setTodosRus] = React.useState([
    {
    id: '222',
    name: "Власова",
    surName: "Виктория",
    thirdName: "Егоровна",
    subject: "Русский",
    number: "(98)999-99-19",
    year: "1198",
  },
    {
    id: '221',
    name: "Ефремова",
    surName: "Алина",
    thirdName: "Евгеньевна",
    subject: "Русский",
    number: "(90)561-84-48",
    year: "1178",
  },
    {
    id: '220',
    name: "Максимов",
    surName: "Григорий",
    thirdName: "Артурович",
    subject: "Русский",
    number: "(98)456-60-50",
    year: "1996",
  },
]);
  const [todosKor, setTodosKor] = React.useState([
    {
    id: '230',
    name: "Ян",
    surName: "Топлес",
    thirdName: "Огурцов",
    subject: "Корейский",
    number: "(98)623-26-55",
    year: "1987",
  },
    {
      id: '231',
    name: "Лазарев",
    surName: "Лев",
    thirdName: "Даниилович",
    subject: "Корейский",
    number: "(98)623-26-55",
    year: "1987",
  },
    {
      id: '232',
    name: "Чумакова",
    surName: "Софья",
    thirdName: "Ивановна",
    subject: "Корейский",
    number: "(98)623-26-55",
    year: "1987",
  },
    {
      id: '233',
    name: "ЯЕремин",
    surName: "Артём",
    thirdName: "Давидович",
    subject: "Корейский",
    number: "(98)623-26-55",
    year: "1987",
  },
]);
  const [todosJap, setTodosJap] = React.useState([
    {
    id: '240',
    name: "Яковлева  ",
    surName: "Милана",
    thirdName: "Марковна",
    subject: "Японский",
    number: "(98)623-26-55",
    year: "1987",
  },
    {
    id: '241',
    name: "Сурков ",
    surName: "Роман",
    thirdName: "Фёдорович",
    subject: "Японский",
    number: "(98)623-26-55",
    year: "1987",
  },
]);
  const [todosChin, setTodosChin] = React.useState([
    {
    id: '250',
    name: "Ян",
    surName: "Топлес",
    thirdName: "Огурцов",
    subject: "Корейский",
    number: "(98)623-26-55",
    year: "1987",
  },
    {
      id: '251',
    name: "Лазарев",
    surName: "Лев",
    thirdName: "Даниилович",
    subject: "Корейский",
    number: "(98)625-26-55",
    year: "1987",
  },
    {
      id: '252',
    name: "Чумакова",
    surName: "Софья",
    thirdName: "Ивановна",
    subject: "Корейский",
    number: "(98)625-26-55",
    year: "1987",
  },
    {
      id: '253',
    name: "Яремин",
    surName: "Артём",
    thirdName: "Давидович",
    subject: "Корейский",
    number: "(98)625-26-55",
    year: "1987",
  },
  {
    id: '254',
  name: "Степанов",
  surName: "Максим",
  thirdName: "Георгиевич",
  subject: "Корейский",
  number: "(98)625-26-55",
  year: "1987",
},
]);
  const [todosMath, setTodosMath] = React.useState([
    {
    id: '260',
    name: "Никита",
    surName: "Камушкин",
    thirdName: "Помидоров",
    subject: "Математика",
    number: "(98)656-66-60",
    year: "1990",
  },
    {
    id: '261',
    name: "Колян",
    surName: "Пыжиков",
    thirdName: "Ералашович",
    subject: "Математика",
    number: "(98)278-70-78",
    year: "1998",
  },
]);
  const [todosChem, setTodosChem] = React.useState([
    {
    id: '271',
    name: "Надоело",
    surName: "Придумывать",
    thirdName: "Имена",
    subject: "Химия",
    number: "(87)465-46-44",
    year: "1989",
  },
    {
    id: '270',
    name: "Тоже",
    surName: "Рандомное",
    thirdName: "Имя",
    subject: "Химия",
    number: "(87)465-46-44",
    year: "1989",
  },
]);
  const [todosBio, setTodosBio] = React.useState([
    {
    id: '280',
    name: "Карасев",
    surName: "Егор",
    thirdName: "Маркович",
    subject: "Биология",
    number: "(98)156-12-52",
    year: "2002",
  },
    {
    id: '281',
    name: "Григорьев",
    surName: "Марк",
    thirdName: "Егорович",
    subject: "Биология",
    number: "(98)156-12-52",
    year: "2002",
  },
    {
    id: '282',
    name: "Селезнева",
    surName: "Элина",
    thirdName: "Александровна",
    subject: "Биология",
    number: "(98)156-12-52",
    year: "2001",
  },
    {
    id: '283',
    name: "Копылова",
    surName: "Анна",
    thirdName: "Давидовна",
    subject: "Биология",
    number: "(98)156-12-52",
    year: "2002",
  },
    {
    id: '284',
    name: "Прохорова ",
    surName: "Мария",
    thirdName: "Ярославовна",
    subject: "Биология",
    number: "(98)256-78-51",
    year: "2003",
  },
]);

  //CREATING TODOS
  const createPost = (newPost) => {
    setGlobalTodos([...globalTodos, newPost]) //Добавление в общий лист всех учеников
    if (newPost.selectedSubj === "English") {
      setTodosEng([...todosEng, newPost]);
    }
    if (newPost.selectedSubj === "Русский") {
      setTodosRus([...todosRus, newPost]);
    }
    if (newPost.selectedSubj === "Korean") {
      setTodosKor([...todosKor, newPost]);
    }
    if (newPost.selectedSubj === "Japan") {
      setTodosJap([...todosJap, newPost]);
    }
    if (newPost.selectedSubj === "Chinas") {
      setTodosChin([...todosChin, newPost]);
    }
    if (newPost.selectedSubj === "Math") {
      setTodosMath([...todosMath, newPost]);
    }
    if (newPost.selectedSubj === "Chemistry") {
      setTodosChem([...todosChem, newPost]);
    }
    if (newPost.selectedSubj === "Biology") {
      setTodosBio([...todosBio, newPost]);
    }
  };

  //SENDING TO RIGHT CARD
  const current_person_func = (curr_pers) => {
    setOne_pers(curr_pers);
  };

  //DELETING TODOS
  const del_pers = (todo) => {
    setAllTodos(allTodos.filter((el) => el.id !== todo.id)); //deleting from group shedule
    setGlobalTodos(globalTodos.filter((el) => el.id !== todo.id)); //deleting from all students schedule
  };

  const eng = () => {
    setAllTodos([...todosEng])
    setShowAllStud(false)
  }
  const rus = () => {
    setAllTodos([...todosRus])
    setShowAllStud(false)
  }
  const kor = () => {
    setAllTodos([...todosKor])
    setShowAllStud(false)
  }
  const jap = () => {
    setAllTodos([...todosJap])
    setShowAllStud(false)
  }
  const chin = () => {
    setAllTodos([...todosChin])
    setShowAllStud(false)
  }
  const math = () => {
    setAllTodos([...todosMath])
    setShowAllStud(false)
  }
  const chem = () => {
    setAllTodos([...todosChem])
    setShowAllStud(false)
  }
  const bio = () => {
    setAllTodos([...todosBio])
    setShowAllStud(false)
  }

  return (
    <div className="students_content">
      <div className="stud_top_flex">
        
        <button //to toggle all students
          className={!showAllStud ? s.stud_toggle_button : s.stud_toggle_button_off}
          onClick={() => setShowAllStud(!showAllStud)}>
          show all students
        </button>

          <CreatingStud createPost={createPost}/>
      </div>
      <div className="stud_mid_flex">
        <div className="projects_div">
          <button className="project" onClick={eng}>Английский</button>
          <button className="project" onClick={rus}>Русский</button>
          <button className="project" onClick={kor}>Корейский</button>
          <button className="project" onClick={jap}>Японский</button>
          <button className="project" onClick={chin}>Китайский</button>
          <button className="project" onClick={math}>Математика</button>
          <button className="project" onClick={chem}>Химия</button>
          <button className="project" onClick={bio}>Биология</button>
        </div>
        {console.log(showAllStud)}

        {!showAllStud ? 
          <StudentsList todos={allTodos}
          current_person={current_person_func}// to send in right side
        /> :
          <StudentsList todos={globalTodos}
          current_person={current_person_func}// to send in right side
        />}    

        <Right_card_stud
          pers={one_pers}
          curr_pers_to_del={del_pers}
        />
      </div>
    </div>
  );
};

export default Students;