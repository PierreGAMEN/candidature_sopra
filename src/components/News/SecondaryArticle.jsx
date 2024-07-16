/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./secondaryArticle.scss";

const SecondaryArticle = ({image, altImage, title, excerpt, url}) => {

  
  return (
    <article className="container_sec_article">
      <div className="container_article_img">
        <Link to={url}><img src={image} alt={altImage} /></Link>
      </div>
      <div className="container_article_content">
        <Link to={url}><h4>{title}</h4></Link>
        <p>{excerpt}</p>
      </div>
    </article>
  );
};

export default SecondaryArticle;