import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./REGISTER/register";
import { Mcq } from "./MCQ/mcq";
import Rules from "./RULES/rules";

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/rules" element={<Rules/>}/>
    <Route path="/mcq" element={<Mcq/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
