import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { store } from "./Redux/store";

function App() {
  // Do not modify anything in this file
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar />
      <MainRoutes />
      </Provider>
    </div>
  );
}

export default App;
