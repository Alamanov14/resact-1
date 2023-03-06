import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Read from "./components/Read";
const App = () => {
  let [data, setData] = useState([]);
  const dataUser = (dataObj) => {
    let newData = [...data];
    newData.push(dataObj);
    setData(newData);
  };

  return (
    <div>
      <Header />
      <Section dataUser={dataUser} />
      <Footer />
      <Read data={data} />
    </div>
  );
};

console.log(123);
export default App;
