/* eslint-disable react/prop-types */
import "./topArticle.scss";

const TopArticle = ({image, altImage, date, title, excerpt}) => {

  
  return (
    <article className="container_article">
      <div className="container_article_img">
      <img src={image} alt={altImage} />
      </div>
      <a href="/article/top10" className="container_article_content">
        <h3>{date}</h3>
        <h4>{title}</h4>
        <p>{excerpt}</p>
      </a>
    </article>
  );
};

export default TopArticle;