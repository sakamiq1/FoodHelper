import { Routes, Route } from "react-router-dom";
import UserForm from "./components/userForm/UserForm";
import "./App.css";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<UserForm />} />
        <Route exact path="/foods" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
