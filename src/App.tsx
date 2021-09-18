import React, { useState, useEffect } from "react";

import "./App.css";
import Posts from "./post";
import Users from "./user";

const App: React.FC = () => {
  const [Texts, setTexts] = useState([]);
  const [User, setUser] = useState([]);
  const [Boole, setBoole] = useState(false);

  useEffect(() => {
    async function FetchData() {
      const FetchA = await fetch("https://jsonplaceholder.typicode.com/todos");

      const res = await FetchA.json();
      return res;
    }

    FetchData().then((data) => setTexts(data));
    async function FetchData1() {
      const FetchA1 = await fetch(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );

      const res1 = await FetchA1.json();
      return res1;
    }

    FetchData1().then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setBoole(true)}>n1</button>
        <button onClick={() => setBoole(false)}>n2</button>
      </header>

      {Boole && <Posts items={User} />}
      {!Boole && <Users items={Texts} />}
    </div>
  );
};

export default App;
