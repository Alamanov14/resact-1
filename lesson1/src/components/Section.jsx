import React, { useState } from "react";

const Section = (props) => {
  const [inpName, setName] = useState("");
  const [inpLast, setLast] = useState("");
  const [inpAge, setAge] = useState("");

  const handleInpName = (e) => {
    setName(e.target.value);
  };

  const handleInpLastName = (e) => {
    setLast(e.target.value);
  };

  const handleInpAge = (e) => {
    setAge(e.target.value);
  };

  const handleBtn = () => {
    if (!inpName || !inpAge || !inpLast) {
      alert("Заполните все поля");
      return;
    }
    const objData = {
      name: inpName,
      lastName: inpLast,
      age: inpAge,
      id: Date.now(),
    };
    props.dataUser(objData);
    setName("");
    setAge("");
    setLast("");
  };
  return (
    <div>
      <ul id="inpUserList">
        <input
          value={inpName}
          type="text"
          className="inpUser"
          placeholder="name"
          onChange={handleInpName}
        />
        <input
          value={inpLast}
          type="text"
          className="inpUser"
          placeholder="last name"
          onChange={handleInpLastName}
        />
        <input
          value={inpAge}
          type="text"
          className="inpUser"
          placeholder="age"
          onChange={handleInpAge}
        />
        <button onClick={handleBtn}>Добавить новые данные</button>
      </ul>
    </div>
  );
};

export default Section;
