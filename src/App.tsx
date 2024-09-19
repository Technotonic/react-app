import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

function App() {
  const cities = ["London", "Paris", "New York", "Tokyo", "India", "Germany"];
  return (
    <>
      <Navbar />
      <ListGroup cities={cities} heading="Cites" />
    </>
  );
}

export default App;
