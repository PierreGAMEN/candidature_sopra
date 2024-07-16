/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import sumArticle from "../../../../data/sum-article";
import SecondaryArticle from "../../../News/SecondaryArticle";
import "./footerArticle.scss";

const FooterArticle = ({NumeroArticle1, NumeroArticle2, NumeroArticle3}) => {
  return (
    <section className="footer_article">
        <h2>Contenus associés</h2>
        <div className="other_article">
        <SecondaryArticle
          image={sumArticle[NumeroArticle1].image}
          title={sumArticle[NumeroArticle1].title}
          excerpt={sumArticle[NumeroArticle1].excerpt}
          url={sumArticle[NumeroArticle1].url}
          altImage={sumArticle[NumeroArticle1].alt}
        />
        <SecondaryArticle
          image={sumArticle[NumeroArticle2].image}
          title={sumArticle[NumeroArticle2].title}
          excerpt={sumArticle[NumeroArticle2].excerpt}
          url={sumArticle[NumeroArticle2].url}
          altImage={sumArticle[NumeroArticle2].alt}
        />
        <SecondaryArticle
         image={sumArticle[NumeroArticle3].image}
         title={sumArticle[NumeroArticle3].title}
         excerpt={sumArticle[NumeroArticle3].excerpt}
         url={sumArticle[NumeroArticle3].url}
         altImage={sumArticle[NumeroArticle3].alt}
        />
        </div>
        <Link className="linkHome" to="/">Retour à la page d'accueil</Link>

      
    </section>
  );
};

export default FooterArticle;