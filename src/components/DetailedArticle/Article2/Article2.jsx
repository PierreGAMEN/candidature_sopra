/* eslint-disable react/no-unescaped-entities */
import "../LayoutArticle/layoutArticle.scss";
import TitleArticle from "../LayoutArticle/TitleArticle/TitleArticle";
import sumArticle from "../../../data/sum-article";
import FooterArticle from "../LayoutArticle/footerArticle/footerArticle";
import { useEffect } from "react";
import "../article.scss"

const Article2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="layout_article">
      <img src={sumArticle[1].image} alt={sumArticle[1].alt} />
      <div className="content_article">
        <TitleArticle title={sumArticle[1].title} />

        <div className="bloc">
          <h3>Qui je suis / Mon parcours</h3>
          <p>
            Récemment diplômé en développement web, je suis sorti de l'école il
            y a deux mois avec une passion pour les technologies et une solide
            formation en React et Node.js. Avant de me lancer dans cette
            aventure technologique, j'ai eu l'opportunité de travailler chez
            Decathlon en tant que manager. Durant cette période, j'ai dirigé des
            équipes hiérarchiques allant jusqu'à 20 personnes et j'ai occupé des
            postes de direction avec la responsabilité de gérer un magasin de
            100 personnes. Ces expériences m'ont permis de développer des
            compétences en leadership, gestion de projet et communication, tout
            en cultivant un goût prononcé pour l'innovation et l'efficacité.
          </p>
        </div>

        <div className="bloc">
          <h3>Ce que peut m'apporter Sopra Steria</h3>
          <p>
            Intégrer Sopra Steria représente pour moi une formidable opportunité
            de croissance professionnelle. En tant que leader européen de la
            transformation numérique, votre entreprise est un environnement
            idéal pour développer mes compétences techniques et acquérir de
            nouvelles connaissances. Je suis particulièrement attiré par votre
            culture d'innovation et votre engagement à accompagner les clients
            dans leur transformation digitale. Travailler avec des experts dans
            ce domaine me permettra d'apprendre et de m'épanouir dans un cadre
            stimulant et dynamique.
          </p>
        </div>

        <div className="bloc">
          <h3>Ce que je peux apporter à Sopra Steria</h3>
          <p>
            Grâce à ma double expérience en gestion et en développement web, je
            suis capable d'apporter une valeur ajoutée unique à Sopra Steria.
            Mon expertise en React et Node.js, couplée à mes compétences en
            management, me permet de travailler efficacement en équipe, de mener
            à bien des projets complexes et de contribuer activement à la
            réalisation des objectifs de l'entreprise. Je suis déterminé,
            adaptable et toujours à la recherche de solutions innovantes pour
            surmonter les défis.
          </p>
        </div>

        <div className="bloc">
          <h3>Conclusion : Mon ambition avec Sopra Steria</h3>
          <p>
            Mon ambition est de m'épanouir en tant que développeur au sein de
            Sopra Steria durant les trois à cinq prochaines années. J'aspire
            ensuite à évoluer vers un poste de lead developer, où je pourrai non
            seulement mettre à profit mon expertise technique, mais aussi mes
            compétences en leadership pour encadrer et inspirer d'autres
            développeurs. Je suis convaincu que Sopra Steria est l'endroit idéal
            pour réaliser cette ambition et contribuer à votre succès continu.
          </p>
        </div>

        <FooterArticle
          NumeroArticle1={0}
          NumeroArticle2={2}
          NumeroArticle3={3}
        />
      </div>
    </main>
  );
};

export default Article2;
