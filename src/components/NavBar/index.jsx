import { PropTypes } from "prop-types";

import "./NavBar.css";

const NavBar = ({ links, updater }) => {
  return (
    <nav className={`main-nav`}>
      <ul className="main-nav-list">
        {links?.map((link, index) => (
          <a
            onClick={() => updater()}
            key={index}
            className={`main-nav-link ${
              index === links.length - 1 ? "nav-cta" : ""
            }`}
            href={link.href}
          >
            {link.title}
          </a>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.array,
  updater: PropTypes.function,
};
export default NavBar;
