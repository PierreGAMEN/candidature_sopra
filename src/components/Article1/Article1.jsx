/* eslint-disable react/no-unescaped-entities */
import "./article1.scss";
import reasonsToHireMe from "./article1-data";

const Article1 = () => {
  return (
    <section>
      <h2>
        10 bonnes raisons d'engager Pierre GAMEN comme développeur dans votre
        entreprise
      </h2>
      <ul>
      {reasonsToHireMe.map((reason, index) => (
        <li key={index}>
        <h3>{reason.title}</h3>
        <p>{reason.description}</p>
    </li>))}   
      </ul>
    </section>
  );
};

export default Article1;
