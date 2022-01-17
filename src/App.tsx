import { ToDoContainer, Header } from "./components";
import { useDsmData } from "./hooks";

export default function App() {
  const { dsmData, cssProperties } = useDsmData();

  return (
    <div className="App" style={cssProperties}>
      <Header dsmData={dsmData} />
      <ToDoContainer />
    </div>
  );
}
