import { Link, Outlet } from "react-router-dom";
import Footer from "../component/Footer";
export default () => {
  return (
    <>
      <section id="header">
        <div className="container">
          <h1 id="logo">
            <Link to="/">Strongly Typed</Link>
          </h1>
          <p>A responsive HTML5 site template. Manufactured by HTML5 UP.</p>
          <nav id="nav">
            <ul>
              <li>
                <Link className="icon solid fa-home" to="/">
                  <span>Introduction</span>
                </Link>
              </li>
              <li>
                <Link className="icon solid fa-cog" to="LeftSidebar">
                  <span>Left Sidebar</span>
                </Link>
              </li>
              <li>
                <Link className="icon solid fa-retweet" to="RightSidebar">
                  <span>Right Sidebar</span>
                </Link>
              </li>
              <li>
                <Link className="icon solid fa-sitemap" to="NoSidebar">
                  <span>Todo List</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
};
