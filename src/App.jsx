import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <div className="container">
      <Header></Header>
      <Form setWeight={setWeight} setHeight={setHeight}></Form>
      {height > 0 && weight > 0 && <Result weight={weight} height={height}></Result>}
    </div>
  );
}

export default App;
