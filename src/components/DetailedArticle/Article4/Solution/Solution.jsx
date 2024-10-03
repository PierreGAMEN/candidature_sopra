/* eslint-disable react/no-unescaped-entities */
import Techno from "./Techno/Techno";
import "./solution.scss";

const Solution = () => {
  return (
    <section id="solutions" className="container_solution"> 
          <Techno
            title="HTML"
            image="https://svgl.app/library/html5.svg"
            description="Langage de base du développement web. Utilisé pour tous mes projets web."
          />
          <Techno
            title="Javascript"
            image="https://svgl.app/library/javascript.svg"
            description="J'utilise JS depuis que j'ai commencé à coder. C'est le langage que je connais le mieux."
          />
          <Techno
            title="SCSS"
            image="https://svgl.app/library/sass.svg"
            description="J'ai pour habitude d'utiliser SCSS plutôt que le CSS classique"
          />
          <Techno
            title="Tailwind CSS"
            image="https://svgl.app/library/tailwindcss.svg"
            description="Utilisé sur quelques projet, tailwind est pratique pour avoir une mise en forme rapide."
          />
          <Techno
            title="React"
            image="https://svgl.app/library/react.svg"
            description="C'est la librairie que j'utilise le plus pour développer mes projets front."
          />
          <Techno
            title="Node.js"
            image="https://svgl.app/library/nodejs.svg"
            description="Côté back-end, j'utilise principalement Node.js pour développer mes projets. "
          />
          <Techno
            title="Express"
            image="https://svgl.app/library/expressjs.svg"
            description="C'est le principal framework que j'utilise lorsque je développe un projet côté back."
          />
          <Techno
            title="GraphQL"
            image="https://svgl.app/library/graphql.svg"
            description="Utilisé dans un projet de belle envergure, O'Talent, mon projet de fin de formation."
          />
          <Techno
            title="PostgresQL"
            image="https://svgl.app/library/postgresql.svg"
            description="Le SGBDR que j'ai utilisé pour l'ensemble de mes projets jusqu'à maintenant."
          />
          <Techno
            title="Sequelize"
            image="https://svgl.app/library/sequelize.svg"
            description="Un ORM que j'utilise parfois mais j'aime aussi écrire mes requêtes SQL à la main."
          />
          <Techno
            title="Github"
            image="https://svgl.app/library/github-light.svg"
            description="C'est le gestionnaire de .git que j'utilise."
          />
           <Techno
          title="Three.js (débutant)"
          image="https://svgl.app/library/threejs-light.svg"
          description="Actuellement en apprentissage, je suis actuellement le cours 'three.js journey'"
          />
          
          <Techno
            title="Vite"
            image="https://svgl.app/library/vitejs.svg"
            description="Je développe principalement mes projets front avec Vite."
          />
          <Techno
            title="Astro"
            image="https://svgl.app/library/astro.svg"
            description="Utilisé sur quelques projets, Astro est pratique avec notamment son système de routage par 'Page'."
          />
          <Techno
            title="Next.js"
            image="https://svgl.app/library/nextjs_icon_dark.svg"
            description="Utilisé sur quelques projet, Next s'intègre parfaitement avec React et permet un déploiement rapide avec Vercel"
          />
    </section>
  );
};

export default Solution;
