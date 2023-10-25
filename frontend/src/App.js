import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos..."/>
          <div className="add">Add</div>
        </div>
        <div className="list">
          <ToDo text="Hi" />
        </div>
      </div>
    </div>
  );
}

export default App;
