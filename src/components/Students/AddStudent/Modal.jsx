import React from "react";
import "./Modal.css";

function Modal({ active, setActive, create }) {
  const [name, setName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [thirdName, setThirdName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [year, setYear] = React.useState("");
  const [selectedSubj, setSelectedSubj] = React.useState()
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  // console.log(today);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      name,
      surName,
      thirdName,
      subject,
      number,
      year,
      selectedSubj,
      today,
    };
    create(newPost);
    setName('')
    setSurName('')
    setThirdName('')
    setNumber('')
    setSubject('')
    setYear('')
    setActive(false);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <br />
        <input
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
          type="text"
          placeholder="surName"
        />
        <br />
        <input
          value={thirdName}
          onChange={(e) => setThirdName(e.target.value)}
          type="text"
          placeholder="thirdName"
        />
        <br />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="subject"
        />
        <br />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="number"
        />
        <br />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          placeholder="year"
        />
        <br />
        <select  
            value={selectedSubj}
            onChange={(e) => setSelectedSubj(e.target.value)}
        >
          <option></option>
          <option>English</option>
          <option>Русский</option>
          <option>Korean</option>
          <option>Japan</option>
          <option>Chinas</option>
          <option>Math</option>
          <option>Chemistry</option>
          <option>Biology</option>
        </select>
        <button onClick={addNewPost}>add</button>
      </div>
    </div>
  );
}

export default Modal;
