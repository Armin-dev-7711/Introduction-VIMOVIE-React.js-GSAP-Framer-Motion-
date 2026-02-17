import BodyCartoons from "@/Components/Cartoons/BodyCartoons";
import HeroCartoon from "@/Components/Cartoons/HeroCartoon";

import PopularCartoons from "@/Components/Cartoons/PopularCartoons";

const Cartoons = (): JSX.Element => {
  return (
    <section>
      <section>
        <HeroCartoon />
      </section>
      <section>
        <PopularCartoons />
      </section>
      <section>
        <BodyCartoons />
      </section>
      {/* <section>
        <HorizontalScroll />
      </section> */}
    </section>
  );
};

export default Cartoons;
