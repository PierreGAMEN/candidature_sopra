import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_primary">
        <div>
          <Link to="/">
            <img
              src="https://www.soprasteria.com/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png"
              alt="logo site sopra steria"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
