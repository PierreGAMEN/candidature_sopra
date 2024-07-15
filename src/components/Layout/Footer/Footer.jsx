import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src="https://www.soprasteria.com/ResourcePackages/Bootstrap4/assets/dist/logos/logo-soprasteria.png" alt="" />
       <div>
        <p>Site original : <a href="https://www.soprasteria.com/fr">Sopra Steria</a></p>
        <p>Réinterpreté par : Pierre GAMEN</p>
        <p>Site réalisé avec React et déployé avec Vite</p>
        </div>
        <p className="copyright">Pierre GAMEN 2024 ©</p>
    </footer>
  );
};

export default Footer;