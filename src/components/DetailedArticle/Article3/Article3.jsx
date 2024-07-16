/* eslint-disable react/no-unescaped-entities */
import "../LayoutArticle/layoutArticle.scss";
import TitleArticle from "../LayoutArticle/TitleArticle/TitleArticle";
import sumArticle from "../../../data/sum-article";
import FooterArticle from "../LayoutArticle/footerArticle/footerArticle";
import { useEffect } from "react";
import "../article.scss";

const Article3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="layout_article">
      <img src={sumArticle[3].image} alt={sumArticle[3].alt} />
      <div className="content_article">
        <TitleArticle title={sumArticle[3].title} />

        <div className="bloc">
          <p>
            <strong>Annecy, 1 septembre 2024</strong> — Dans un monde en
            constante évolution technologique, une nouvelle ère de collaboration
            s'ouvre entre Pierre GAMEN et Sopra Steria. Pierre GAMEN,
            développeur fullstack prometteur et ancien manager chez Decathlon,
            rejoint les rangs de Sopra Steria, leader européen de la
            transformation numérique. Cette alliance prometteuse est destinée à
            redéfinir les standards de l'industrie technologique.
          </p>
        </div>

        <div className="bloc">
          <h3>Un partenariat fondé sur l'innovation et l'excellence</h3>
          <p>
            Pierre GAMEN, ayant acquis une précieuse expérience en gestion
            d'équipe chez Decathlon, apporte à Sopra Steria non seulement ses
            compétences techniques dans le développement web, mais aussi une
            vision stratégique singulière portée sur l'expérience client.
          </p>
          <p>
            "Mon parcours chez Decathlon m'a permis de développer des
            compétences essentielles en leadership et en gestion de projets.
            Rejoindre Sopra Steria est une opportunité excitante pour intégrer
            ces expériences dans le domaine technologique," a déclaré Pierre
            GAMEN. "Je suis convaincu que notre collaboration peut ouvrir de
            nouvelles perspectives et mener à des innovations significatives."
          </p>
        </div>

        <div className="bloc">
          <h3>Une vision commune pour l'avenir</h3>
          <p>
            Ce partenariat repose sur une vision commune : utiliser la
            technologie pour créer des solutions innovantes et durables qui
            répondent aux besoins croissants des entreprises et des
            organisations publiques. La synergie entre Pierre GAMEN et les
            équipes de Sopra Steria est palpable, et les perspectives d'avenir
            sont des plus prometteuses.
          </p>
          <p>
            "Nous sommes ravis d'accueillir Pierre GAMEN au sein de notre
            équipe," a déclaré un porte-parole de Sopra Steria. "Son expérience
            en tant que manager chez Decathlon apporte une dimension
            supplémentaire à notre approche de la transformation numérique.
            Ensemble, nous allons continuer à innover et à fournir des solutions
            de pointe à nos clients."
          </p>
        </div>

        <div className="bloc">
          <h3>Conclusion</h3>
          <p>
            L'alliance entre Pierre GAMEN et Sopra Steria marque le début d'une
            nouvelle ère dans le domaine de la transformation numérique. En
            combinant son expertise technique avec son bagage en gestion
            d'équipe, Pierre GAMEN est bien positionné pour aider Sopra Steria à
            relever les défis technologiques de demain. Avec cette
            collaboration, le futur de la technologie semble plus brillant que
            jamais, et les attentes sont élevées pour voir les fruits de cette
            alliance stratégique.
          </p>
          <p>
            Ensemble, Pierre GAMEN et Sopra Steria sont bien partis pour écrire
            une nouvelle page de l'histoire technologique, remplie d'innovations
            et de succès.
          </p>
        </div>

        <FooterArticle
          NumeroArticle1={0}
          NumeroArticle2={1}
          NumeroArticle3={3}
        />
      </div>
    </main>
  );
};

export default Article3;
