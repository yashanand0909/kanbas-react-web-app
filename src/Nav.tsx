import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-pills mt-2">
      <Link to="/Labs/a3"
            className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>A3</Link>
      <Link to="/Kanbas"
            className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
      <Link to="/HelloWorld"
            className={`nav-link ${pathname.includes("helloWorld") ? "active" : ""}`}>Hello</Link>
    </nav>
);}

export default Nav;