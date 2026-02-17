import {
  HomeThree,
  HomeTwo,
  HomeOne,
  HomeFive,
  HomeFour,
} from "@/assets/index";
import {
  PersonFive,
  PersonFour,
  PersonOne,
  PersonSix,
  PersonThree,
  PersonTwo,
} from "@/assets/Person";

type HeroSection = {
  title: string;
  description: string;
  image: string;
};

type ServicesCard = {
  title: string;
  description: string;
  price: {
    value: string;
    type?: string;
  };
  objective: string[];
  bgImage: string;
};

type TestimonialType = {
  person: string;
  name: string;
  description: string;
  mail: string;
};

type FAQType = { title: string; description: string };

export type Pr = {
  handleLink: (value: string) => void;
  MS: string | null;
};

export const menu: string[] = ["Home", "Movies", "Cartoons", "Upcoming"];

export const heroSections: HeroSection[] = [
  {
    title: "welcome to VI MOVIE",
    description:
      "This is the place where you can find the latest movies and TV shows from around the world",
    image: HomeThree,
  },
  {
    title: "Endless Entertainment Await",
    description:
      "Watch the latest blockbusters, classic hits, and binge-worthy series in high quality.",
    image: HomeTwo,
  },
  {
    title: "Discover, Watch, Enjoy",
    description:
      "Explore a massive collection of movies and shows, all categorized for your convenience.",
    image: HomeOne,
  },
  {
    title: "Your Ultimate Movie Hub",
    description:
      "From Hollywood to Bollywood, we bring you the best of cinema, all in one place.",
    image: HomeFive,
  },
  {
    title: "Stream Anytime, Anywhere",
    description:
      "Enjoy seamless streaming on any device with the best video quality and subtitles.",
    image: HomeFour,
  },
];

export const DataServicesCard: ServicesCard[] = [
  {
    title: "Basic Plan",
    description:
      "Ideal for casual viewers who enjoy watching movies and series occasionally.",
    price: {
      value: "Free",
      type: "",
    },
    objective: [
      "Access to a limited collection of movies & series",
      "Standard video quality (720p)",
      "Ads included",
    ],
    bgImage: "card-backgroundOne",
  },
  {
    title: "Premium Plan",
    description:
      "Perfect for movie lovers who want an ad-free experience with high-quality streaming.",
    price: {
      value: "$9.99",
      type: "/month",
    },
    objective: [
      "Full access to all movies & series",
      "HD & Full HD quality (1080p)",
      "Ad-free experience",
      "Offline downloads",
    ],
    bgImage: "card-backgroundTwo",
  },
  {
    title: "VIP Plan",
    description:
      "Best for cinema enthusiasts who want the ultimate streaming experience.",
    price: {
      value: "$14.99",
      type: "/month",
    },
    objective: [
      "Everything in Premium",
      "4K Ultra HD quality",
      "Exclusive early access to new releases",
      "Multi-device streaming (Up to 4 screens)",
    ],
    bgImage: "card-backgroundThree",
  },
];

export const TestimonialData: TestimonialType[] = [
  {
    person: PersonThree,
    name: "Matilda Hays",
    description:
      "VI MOVIE completely changed the way I watch movies and series! The collection is massive, and I love how easy it is to find hidden gems. The ad-free experience makes it even better, and the streaming quality is always top-notch. Whether I’m watching on my laptop or TV, it just works flawlessly. Totally worth every penny!",
    mail: "@matilda",
  },
  {
    person: PersonTwo,
    name: "Daniel Ericson",
    description:
      "I’ve used multiple streaming platforms before, but VI MOVIE stands out with its incredible 4K streaming and fast loading times. I no longer have to wait for buffering or deal with annoying ads. The movie recommendations are also on point, introducing me to films I wouldn’t have found otherwise. This is the ultimate platform for any true movie lover!",
    mail: "@daniel",
  },
  {
    person: PersonOne,
    name: "Mark Tomson",
    description:
      "What I love the most about VI MOVIE is its clean and intuitive interface. Everything is well-organized, making it super easy to navigate. The personalized recommendations feel like they actually understand my taste in movies, which is something I haven’t seen in other platforms. It’s like having my own personal movie curator!",
    mail: "@mark",
  },
  {
    person: PersonFour,
    name: "Sarah Lan",
    description:
      "The ability to download movies and watch them offline has been a lifesaver for me. Whether I’m traveling or stuck somewhere without internet, I can always count on VI MOVIE to keep me entertained. Plus, the download quality is just as good as streaming, so I never feel like I’m missing out. Highly recommended!",
    mail: "@sarah",
  },
  {
    person: PersonSix,
    name: "Vergil Hardy",
    description:
      "As a die-hard cinema fan, VI MOVIE gives me exactly what I need—early access to exclusive releases, behind-the-scenes content, and an amazing selection of both classic and new films. The platform feels premium, and I appreciate the attention to detail in both design and content curation. If you love movies, this is the place to be!",
    mail: "@vergil",
  },
  {
    person: PersonFive,
    name: "Olivia H",
    description:
      "I’ve tried a lot of streaming services, but VI MOVIE just does everything right. The video quality, smooth playback, and excellent customer support make it stand out from the rest. The fact that I can watch on multiple devices without interruptions is a huge plus. If you’re looking for the best streaming experience, VI MOVIE is the answer!",
    mail: "@olivia",
  },
];

export const FAQData: FAQType[] = [
  {
    title: "What is VI MOVIE?",
    description:
      "VI MOVIE is a streaming platform that offers a diverse collection of movies and series in high quality.",
  },
  {
    title: "Do I need a subscription to use VI MOVIE?",
    description:
      "We offer a free plan with limited features, but to access premium content, you need to subscribe to one of our plans.",
  },
  {
    title: "Can I download movies and watch them offline?",
    description:
      "Yes! With our Premium and VIP plans, you can download movies and series to watch offline.",
  },
  {
    title: "What streaming quality options are available?",
    description:
      "We support 720p (Free), 1080p (Premium), and 4K Ultra HD (VIP) to provide you with the best viewing experience.",
  },
  {
    title: "How can I contact VI MOVIE support?",
    description:
      "You can reach our support team through the Contact Us section on our website or via our official email.",
  },
];
