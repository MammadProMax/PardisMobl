import { ReactElement } from "react";

import HeroSection from "../layout/home/heroSection";
import Features from "../layout/home/features";
import PopularItems from "../layout/home/popularItems";

const Home = (): ReactElement => (
  <>
    <HeroSection />
    <Features />
    <PopularItems />
  </>
);

export default Home;
