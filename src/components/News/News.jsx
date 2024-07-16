/* eslint-disable react/no-unescaped-entities */
import SecondaryArticle from "./SecondaryArticle";
import TopArticle from "./TopArticle";
import "./news.scss";
import sumArticle from "../../data/sum-article";

const News = () => {
  return (
    <section className="news">
      <h2>What's new</h2>

      {/* Only one article on this part */}
      <div className="container_top_article">
        <TopArticle
          image={sumArticle[0].image}
          date={sumArticle[0].date}
          title={sumArticle[0].title}
          excerpt={sumArticle[0].excerpt}
          url={sumArticle[0].url}
        />
      </div>
      {/* Three article on this part  */}
      <div className="container_secondary_article">
        <SecondaryArticle
          image={sumArticle[1].image}
          title={sumArticle[1].title}
          excerpt={sumArticle[1].excerpt}
          url={sumArticle[1].url}
        />
        <SecondaryArticle
          image={sumArticle[2].image}
          title={sumArticle[2].title}
          excerpt={sumArticle[2].excerpt}
          url={sumArticle[2].url}
        />
        <SecondaryArticle
         image={sumArticle[3].image}
         title={sumArticle[3].title}
         excerpt={sumArticle[3].excerpt}
         url={sumArticle[3].url}
        />
      </div>
    </section>
  );
};

export default News;
