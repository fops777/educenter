import React from 'react';
import Modal from './Modal'

function CreatingStud({createPost}) {
  const [modalActive, setModalActive] = React.useState(false); //показ/скрыть modal окно
    return (
        <div>
        <button //Добавить ученика+
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
    )
}

export default CreatingStud
