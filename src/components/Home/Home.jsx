import { useEffect } from "react";
import Commitment from "../Commitment/Commitment";
import Hero from "../Hero/Hero";
import News from "../News/News";
import Rapport from "../Rapport/Rapport";
import "./home.scss";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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