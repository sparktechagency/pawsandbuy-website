import { useEffect } from "react";
import Banner from "../../components/home/Banner"
import Faq from "../../components/home/Faq"
import Slider from "../../components/slider/Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <Slider />
      <Faq />
    </div>
  )
}

export default Home;