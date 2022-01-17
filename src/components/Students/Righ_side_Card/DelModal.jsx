import React from 'react'

function DelModal({pers, deleteHandler, active, setActive }) {
    return (
        <div className={active ? "modal active" : 'modal'} onClick={() => setActive(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            Вы точно хотите удалить <h3>{pers.name} {pers.surName} {pers.thirdName}?</h3>
            <br />
            <button onClick={() => setActive(false)} >Cancel</button>
            <button onClick={deleteHandler} className='delete_btn'>Delete</button>
          </div>
        </div>
      );
}

export default DelModal
