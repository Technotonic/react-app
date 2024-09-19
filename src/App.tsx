import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

function App() {
  const cities = ["London", "Paris", "New York", "Tokyo", "India", "Germany"];
  const [heading, setHeading] = useState("");
  return (
    <>
      <Navbar />
      {heading && <Alert heading={heading} setHeding={setHeading} />}
      <ListGroup setHeding={setHeading} cities={cities} heading="Cites" />
    </>
  );
}

export default App;
