/* eslint-disable react/prop-types */
import "./secondaryArticle.scss";

const SecondaryArticle = ({image, altImage, title, excerpt}) => {

  
  return (
    <article className="container_sec_article">
      <div className="container_article_img">
        <img src={image} alt={altImage} />
      </div>
      <div className="container_article_content">
        <h4>{title}</h4>
        <p>{excerpt}</p>
      </div>
    </article>
  );
};

export default SecondaryArticle;