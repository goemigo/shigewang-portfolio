import { useState } from "react";
import menu from "./menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <div className="media-icons">
          <a  href="https://github.com/goemigo" rel="noreferrer" target="_blank"> 
            <FontAwesomeIcon icon={faGithub} className="github" size="lg"/>
          </a>
          <a  href="https://www.linkedin.com/in/shigew/" rel="noreferrer" target="_blank"> 
            <FontAwesomeIcon icon={faLinkedin} className="linkedin" size="lg"/>
          </a>
          <a  href="https://www.instagram.com/emiiiiii1219/" rel="noreferrer" target="_blank"> 
            <FontAwesomeIcon icon={faInstagram} className="insta" size="lg"/>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
