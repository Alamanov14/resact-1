import React from "react";

const Read = (props) => {
  return (
    <div className="div1">
      {props.data.map((item) => (
        <table class="table">
          <thead>
            <tr>
              <th>ИМЯ</th>
              <th>ОТЧЕСТВО</th>
              <th>ВОЗРАСТ</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default Read;
