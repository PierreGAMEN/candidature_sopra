/* eslint-disable react/no-unescaped-entities */
import "../LayoutArticle/layoutArticle.scss";
import TitleArticle from "../LayoutArticle/TitleArticle/TitleArticle";
import sumArticle from "../../../data/sum-article";
import FooterArticle from "../LayoutArticle/footerArticle/footerArticle";
import { useEffect } from "react";

const Article3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="layout_article">
      <img src={sumArticle[2].image} alt={sumArticle[2].alt} />
      <div className="content_article">
        <TitleArticle title={sumArticle[2].title} />

        {/* Ici ajouter votre contenu */}

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
