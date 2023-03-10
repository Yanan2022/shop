import {AllRoutes} from "./routes/AllRoutes"
import {Header} from "./components"
import "./App.css"
// import Header from "./components/Header";
// import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
