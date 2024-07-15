/* eslint-disable react/no-unescaped-entities */
import SecondaryArticle from "./SecondaryArticle";
import TopArticle from "./TopArticle";
import "./news.scss";

const News = () => {
  return (
    <section className="news">
      <h2>What's News</h2>

      {/* Only one article on this part */}
      <div className="container_top_article">
        <TopArticle
          image="https://www.soprasteria.com/images/librariesprovider2/default-album/default-images/sopra-steria.jpg"
          date="16 Juillet 2024"
          title="10 bonnes raisons d'engager Pierre GAMEN"
          excerpt="Retrouvez dans cet article 10 bonnes raisons de m'engager dans votre entreprise, la dernière risque de vous surprendre."
        />
      </div>
      {/* Three article on this part  */}
      <div className="container_secondary_article">
        <SecondaryArticle
          image="https://www.soprasteria.com/images/librariesprovider2/sopra-steria-corporate-images/people-large-image-(355x220)/thumbnail_spak_matrix_cloud_app.jpg?sfvrsn=ad2b41db_3"
          title="Parcours et motivations pour le poste"
          excerpt="Cet article détail mon parcours,ma vision et surtout les motivations qui me poussent à postuler dans votre entreprise. "
        />
        <SecondaryArticle
          image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlnBc63tTRk7_VH4gxkQPABU3k7KnLXw3BDTphmDNm4z5RLAQX"
          title="Vers une alliance stratégique"
          excerpt="L'alliance entre Sopra et Pierre GAMEN est une réussite. Découvrez comment ces deux acteurs du marché ont réussi un coup du tonnerre."
        />
        <SecondaryArticle
          image="https://www.soprasteria.com/images/librariesprovider2/sopra-steria-corporate-images/images-800x800/ia-cloud-800.jpg?sfvrsn=bcdca1dc_3"
          title="Mes compétences techniques"
          excerpt="Une image vaut mille mots, la maîtrise d'une compétence technique vaut bien plus encore. Découvrez la liste de mes stacks dans cet article."
        />
      </div>
    </section>
  );
};

export default News;
