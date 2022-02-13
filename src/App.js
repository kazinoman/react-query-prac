import "./App.css";
import PageRoute from "./pages/pageRoute";
import { useLocation } from "react-router-dom";

function App() {
  const loc = useLocation();
  console.log(loc);
  return (
    <div className="App">
      <h1>asd</h1>
      <br />
      <PageRoute />
    </div>
  );
}

export default App;
