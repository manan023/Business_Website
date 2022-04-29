import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Home } from "./myComponent/Home";
import { Navbar } from "./myComponent/Navbar";
import { About }  from "./myComponent/About";
import { Service } from "./myComponent/Service";
import { Contact } from "./myComponent/Contact";
import { Footer } from "./myComponent/Footer";
import CreateResume from "./myComponent/createResume"

function App() {
  return (
    <>
      <Router>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/service" element={<Service/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/create" element={<CreateResume/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    

      
    </>
  );
}

export default App;
