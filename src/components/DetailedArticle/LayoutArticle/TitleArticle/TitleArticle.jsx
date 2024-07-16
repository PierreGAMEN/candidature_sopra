/* eslint-disable react/prop-types */
import "./titleArticle.scss";

const TitleArticle = ({title}) => {
  return (
    <div className="title_article">
        <h1>{title}</h1>
    </div>
  );
};

export default TitleArticle;