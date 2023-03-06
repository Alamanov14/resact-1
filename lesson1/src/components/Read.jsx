import React from "react";

const Read = (props) => {
  return (
    <div className="div1">
      {props.data.map((item) => (
        <table>
          <tr>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Возраст</th>
          </tr>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};

export default Read;
