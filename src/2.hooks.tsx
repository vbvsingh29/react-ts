import { useReducer, useRef, useState } from "react";

interface Todo {
  text: string;
  id: number;
}
interface AddItemsProps {
  handleClick: (text: Todo["text"]) => void;
}
function AddItem({ handleClick }: AddItemsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="Add-Todo">
      <input ref={inputRef} placeholder="To add items" />
      <button
        onClick={() => {
          if (inputRef.current && inputRef.current.value) {
            handleClick(inputRef.current.value);
            inputRef.current.value = "";
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}
const intialState = { count: 0 };
enum ACTION_TYPE {
  increment = "increment",
  decrement = "decrement",
}
function reducer(state: typeof intialState, action: { type: ACTION_TYPE }) {
  switch (action.type) {
    case ACTION_TYPE.increment:
      return { count: state.count + 1 };
      break;
    case ACTION_TYPE.decrement:
      return { count: state.count - 1 };
      break;
    default:
      throw new Error("Not Correct state");
  }
}
function App() {
  const [item, setItems] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(reducer, intialState);

  function handleClick(text: Todo["text"]) {
    setItems([...item, { text, id: item.length + 1 }]);
  }
  function remove(id: Todo["id"]) {
    return setItems(item.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <h1>You have {item.length} Todos</h1>
      <ul>
        {item.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => remove(item.id)}>x</button>
            </li>
          );
        })}
      </ul>
      <AddItem handleClick={handleClick} />
      Count {state.count}
      <button
        onClick={() => {
          if (state.count === 0) {
            return;
          }
          dispatch({ type: ACTION_TYPE.decrement });
        }}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.increment })}>
        {" "}
        +
      </button>
    </div>
  );
}

export default App;
