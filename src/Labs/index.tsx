import {Link, Route, Routes} from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
function Labs() {
 return(
  <div>
    <Nav/>
    <h1>Labs</h1>
    <Link to="/Labs/a3">Assignment3</Link>
    <Routes>
        <Route path="a3/*" element={<Assignment3/>} />
    </Routes>
  </div>
 );
}


export default Labs;