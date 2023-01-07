import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div>
        <TodoTemplate>
          <TodoInsert />
          <TodoList/>
        </TodoTemplate>
      </div>
    </div>
  );
}

export default App;
