import AboutUs from "@/Components/Home/AboutUs/AboutUs";
import Banner from "@/Components/Home/BannerLogo/Banner";
import Contact from "@/Components/Home/Contact/Contact";
import FAQ from "@/Components/Home/FAQ/FAQ";
import Hero from "@/Components/Home/HeroSection/Hero";
import Services from "@/Components/Home/Services/Services";
import Testimonial from "@/Components/Home/Testimonial/Testimonial";

const Home = (): JSX.Element => {
  return (
    <section>
      <section>
        <Hero />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <FAQ />
      </section>
    </section>
  );
};

export default Home;
