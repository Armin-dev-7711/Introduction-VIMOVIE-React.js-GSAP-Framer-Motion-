import BodyMovie from "@/Components/Movies/BodyMovie";
import Chosen from "@/Components/Movies/Chosen";
import HeroMovie from "@/Components/Movies/HeroMovie";

import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router";

const Movies = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const MS: string | null = searchParams.get("type");
  return (
    <section>
      <section>
        <HeroMovie MS={MS} />
      </section>
      <section>
        <AnimatePresence mode='wait'>
          {MS === null ? <Chosen /> : <BodyMovie />}
        </AnimatePresence>
      </section>
    </section>
  );
};

export default Movies;
