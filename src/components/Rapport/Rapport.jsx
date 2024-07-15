import "./rapport.scss";

const Rapport = () => {
  return (
    <section className="container_rapport">
        <h2>Rapport de parcours</h2>
        <div className="container_rapport_content">
            <div className="content">
           <h3>CV - Pierre GAMEN</h3> 
           <a href="/Cv-Pierre-GAMEN.pdf">version digitale</a>
           </div>
           <div className="blank">
           <a href="/Cv-Pierre-GAMEN.pdf"><img src="/Cv-Pierre-GAMEN.png" alt="photo cv Pierre GAMEN" /></a>
           </div>
        </div>
        
      
    </section>
  );
};

export default Rapport;