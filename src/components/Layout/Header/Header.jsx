import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_secondary"></div>
      <div className="header_primary">
        <div>
          <a href="/">
            <img
              src="https://www.soprasteria.com/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png"
              alt="logo site sopra steria"
            />
          </a>
        </div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
