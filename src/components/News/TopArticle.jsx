/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./topArticle.scss";

const TopArticle = ({image, altImage, date, title, excerpt, url}) => {

  
  return (
    <article className="container_article">
      <div className="container_article_img">
      <img src={image} alt={altImage} />
      </div>
      <Link to={url} className="container_article_content">
        <h3>{date}</h3>
        <h4>{title}</h4>
        <p>{excerpt}</p>
      </Link>
    </article>
  );
};

export default TopArticle;