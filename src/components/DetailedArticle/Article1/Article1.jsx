/* eslint-disable react/no-unescaped-entities */
import "../LayoutArticle/layoutArticle.scss";
import TitleArticle from "../LayoutArticle/TitleArticle/TitleArticle";
import reasonsToHireMe from "./article1-data";
import sumArticle from "../../../data/sum-article";
import FooterArticle from "../LayoutArticle/footerArticle/footerArticle";
import { useEffect } from "react";

const Article1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="layout_article">
      <img src={sumArticle[0].image} alt={sumArticle[0].alt} />
      <div className="content_article">
        <TitleArticle title={sumArticle[0].title} />

        <ol>
          {reasonsToHireMe.map((reason, index) => (
            <li key={index}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </li>
          ))}
        </ol>

        <FooterArticle
          NumeroArticle1={1}
          NumeroArticle2={2}
          NumeroArticle3={3}
        />
      </div>

    </main>
  );
};

export default Article1;
