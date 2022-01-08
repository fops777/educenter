import React, { useState } from "react";
import "./Modal.css";

function Modal({ active, setActive, create }) {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const [file, setFile] = useState({});

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
      file,
    };
    create(newPost); //передает новый пост вверх по дереву
    setName("");
    setSurName("");
    setThirdName("");
    setSubject("");
    setNumber("");
    setYear("");
    setFile(null);
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
          placeholder="Name"
        />
        <br />
        <input
          value={surName}
          onChange={(e) => setSurName(e.target.value)}
          type="text"
          placeholder="Surname"
        />
        <br />
        <input
          value={thirdName}
          onChange={(e) => setThirdName(e.target.value)}
          type="text"
          placeholder="ThirdName"
        />
        <br />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
        />
        <br />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="000-00-00"
        />
        <br />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          placeholder="Birth date"
        />
        <br />
        <input
          type="file"
          // value={file}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button onClick={addNewPost}>add</button>
      </div>
    </div>
  );
}

export default Modal;
