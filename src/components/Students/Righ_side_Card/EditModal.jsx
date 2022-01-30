import React from 'react'

function EditModal({pers, setPers, active, setActive }) {
    return (
        <div className={active ? "modal active" : 'modal'} onClick={() => setActive(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <input
            value={pers.name}
            onChange={(e) => setPers(e.target.value)}
            type="text"
            placeholder="name"
        />
        <br />
        <input
          value={pers.surName}
          onChange={(e) => setPers(e.target.value)}
          type="text"
          placeholder="surName"
        />
        <br />
        <input
          value={pers.thirdName}
          onChange={(e) => setPers(e.target.value)}
          type="text"
          placeholder="thirdName"
        />
        <br />
        <input
          value={pers.subject}
          onChange={(e) => setPers(e.target.value)}
          type="text"
          placeholder="subject"
        />
        <br />
        <input
          value={pers.number}
          onChange={(e) => setPers(e.target.value)}
          type="text"
          placeholder="number"
        />
        <br />
        <input
          value={pers.year}
          onChange={(e) => setPers(e.target.value)}
          type="text"
          placeholder="year"
        />
            <br />
            <button onClick={() => setActive(false)}>Cancel</button>
            <button className='delete_btn'>Edit</button>
          </div>
        </div>
      );
}

export default EditModal;
