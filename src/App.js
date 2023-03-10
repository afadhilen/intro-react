import logo from "./logo.svg";
import "./App.css";
import Welcome, {Welcome2} from "./components/Welcome";
import Button from "./components/Button";
import Todo from "./components/Todo";
import About from "./components/About";
import {Link, Route, Routes} from "react-router-dom";
import Socials from "./components/Socials";
import AboutTeam from "./components/AboutTeam";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome />
          <Button>Klik Diriku</Button>
          <Welcome2 children="Todo List App using ReactJS" />
          <Welcome2>&copy; Dhilen 2023</Welcome2>
        </header>
      </div>
      <div className="App" id="todo">
        <header className="App-header">
          <Todo />
        </header>
      </div>
      {/* Bagian Blog dkk dibedakan pada project selanjutnya */}
      {/* <div className="Appz" id="about">
        <header className="App-header-1">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/social">Social</Link>
          </nav>
          <Routes>
            <Route path="about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
            </Route>
            <Route path="social" element={<Socials />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div> */}
    </>
  );
}

export default App;
