import { useState } from "react";
import menu from "./menu";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  const list = menu.map((item) => {
    return (
      <li className="nav-item" key={item.name}>
        <a
          className="nav-link"
          href={item.path}
          onClick={(e) => {
            e.preventDefault();
            setPage(item.name);
            setShowMenu(!showMenu);
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  const menuClass = showMenu ? "list-open" : "";

  return (
    <header className="header">
      <nav className={"nav"}>
        <button className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="gg-menu-boxed"></i>
        </button>
        <ul className={`${menuClass} nav-list`}>
          <button className="close-menu" onClick={() => setShowMenu(!showMenu)}>
            <i className="gg-close-r"></i>
          </button>
          {list}
        </ul>
      </nav>
      {/* <div className="media-icons">
                
            </div> */}
    </header>
  );
}

export default Header;
