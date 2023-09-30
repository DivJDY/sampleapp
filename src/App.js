import { BrowserRouter as Router, Link } from "react-router-dom";
import Navigation from "./Navigation";

const App = () => {
  return (
    <Router>
      <header>
        <h1
          style={{ textAlign: "center", fontSize: "8vh", fontWeight: "bold" }}
        >
          React App
        </h1>
        <div className="header-bg">
          <nav>
            <ul className="nav-header">
              <li>
                <Link to="/">
                  <p className="nav-txt"> Landing Page</p>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <p className="nav-txt"> Home Page</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Navigation />
    </Router>
  );
};

export default App;
