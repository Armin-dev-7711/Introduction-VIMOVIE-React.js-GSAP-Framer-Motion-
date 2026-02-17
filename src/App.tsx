// import { useEffect, useState } from "react";

import Header from "@/Components/Global/Header";
import { Route, Routes, useLocation } from "react-router";
import Home from "@/Pages/Home";
import Movies from "@/Pages/Movies";
import Cartoons from "@/Pages/Cartoons";
import Serries from "@/Pages/Serries";
import Footer from "@/Components/Global/Footer";
import Upcomings from "@/Pages/Upcoming";
import PageNotFound from "./Pages/PageNotFound";

import LoadingPage from "./Components/Global/LoadingPage";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageAnimation from "./Components/Global/PageAnimation";
import Saved from "./Pages/Saved";

const App = () => {
  "use memo";
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const locomotiveScroll: LocomotiveScroll = new LocomotiveScroll();

  useEffect(function () {
    const timeOut = setTimeout(function () {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key='loading'
            exit={{
              transform: "translateY(-100vh)",
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            <LoadingPage />
          </motion.div>
        ) : (
          // <AnimatePresence mode='wait'>
          <PageAnimation key={location.pathname}>
            <Header />
            <main>
              {/* <WebsiteContext> */}
              <Routes location={location} key={location.pathname}>
                <Route path='/' index element={<Home />} />
                <Route path='movies' element={<Movies />} />
                <Route path='cartoons' element={<Cartoons />} />
                <Route path='serries' element={<Serries />} />
                <Route path='upcoming' element={<Upcomings />} />
                <Route path='saved' element={<Saved />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
              {/* </WebsiteContext> */}
            </main>
            <Footer />
          </PageAnimation>
          // </AnimatePresence>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
