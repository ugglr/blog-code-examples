import { MyCustomCountingHook } from "./hooks/MyCustomHooks";

const App = () => {
  const { count, incrementCount } = MyCustomCountingHook();

  return (
    <div>
      <p>The state is {count}</p>
      <button onClick={() => incrementCount()}>Increment State</button>
    </div>
  );
};

export default App;
