import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  let [category, setCategory] = useState("general");
  return (
    <>
      <div>
        <NavBar setCategory={setCategory} />
        <NewsBoard category={category} />
      </div>
    </>
  );
}

export default App;
