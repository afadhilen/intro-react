import {Link, Outlet} from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>Ini adalah halaman about, untuk melihat lebih detail dapat dilihat di:</p>
      <ul>
        <li>
          <Link to="/about/team/">Team</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default About;
