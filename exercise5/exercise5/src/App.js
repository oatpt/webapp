import "./App.css";
import dataFood from "./DataFood";
import Menu from "./Box";

function App() {
  //load data
  const rows = dataFood.map((x) => {
    return <Menu
      key={x.id}
      type={x.type}
      name={x.name}
      description={x.description}
      src={x.pic}
    />
  });
  
  return (
    <div className="App">
      <h1 id="title">โหวตอาหาร</h1>
      {rows}
    </div>
  );
}

export default App;
