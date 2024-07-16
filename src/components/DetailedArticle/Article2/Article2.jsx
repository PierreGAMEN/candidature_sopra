/* eslint-disable react/no-unescaped-entities */
import "../LayoutArticle/layoutArticle.scss";
import TitleArticle from "../LayoutArticle/TitleArticle/TitleArticle";
import sumArticle from "../../../data/sum-article";
import FooterArticle from "../LayoutArticle/footerArticle/footerArticle";
import { useEffect } from "react";

const Article2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="layout_article">
      <img src={sumArticle[1].image} alt={sumArticle[1].alt} />
      <div className="content_article">
        <TitleArticle title={sumArticle[1].title} />

        {/* Ici ajouter votre contenu */}

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
