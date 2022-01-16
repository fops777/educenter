import React from 'react'

function DelModal({ deleteHandler, active, setActive }) {
    return (
        <div className={active ? "modal active" : 'modal'} onClick={() => setActive(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(false)} >Cancel</button>
            <button onClick={deleteHandler} className='delete_btn'>Delete</button>
          </div>
        </div>
      );
}

export default DelModal
