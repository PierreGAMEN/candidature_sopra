/* eslint-disable react/no-unescaped-entities */
import "./commitment.scss";

const Commitment = () => {
  return (
    <section className="container_commitment">
      <a
        href="https://pierre-gamen.netlify.app/"
        className="container_commitment_content"
      >
        <h3>Développeur oui, mais...</h3>
        <p>
          Découvrez mon portfolio afin d'avoir une vue d'ensemble sur mon
          profil, les projets que j'ai menés et l'apport réél que je peux vous
          apporter.
        </p>
        <p>
          Je suis développeur mais je suis avant tout une personne engagée,
          enthousiaste et bienveillante. Ancien manager, je sais animer,
          développer et comprendre les enjeux stratégiques d'une entreprise.
        </p>
        <div className="more">
        <a href="https://pierre-gamen.netlify.app/">Mon portfolio</a>
        <span className="material-symbols-rounded">arrow_forward</span>
        </div>
      </a>
      <div className="container_commitment_image">
        <img src="/photo-PG.jpg" alt="photo Pierre GAMEN" />
      </div>
    </section>
  );
};

export default Commitment;
