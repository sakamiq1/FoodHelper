import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Foods from "./pages/FoodsPage/Foods";
import HomePage from "./pages/homePage/HomePage";
import TablePage from "./pages/TablePage/TablePage";
import UserForm from "./pages/userForm/UserForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/form" element={<UserForm />} />
        <Route exact path="/foods" element={<Foods />} />
        <Route exact path='/table' element={<TablePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
