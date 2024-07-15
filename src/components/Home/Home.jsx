import Commitment from "../Commitment/Commitment";
import Hero from "../Hero/Hero";
import News from "../News/News";
import Rapport from "../Rapport/Rapport";
import "./home.scss";

const Home = () => {
  return (
    <main>
      <Hero />
      <News />
      <Commitment />
      <Rapport />
    </main>
  );
};

export default Home;