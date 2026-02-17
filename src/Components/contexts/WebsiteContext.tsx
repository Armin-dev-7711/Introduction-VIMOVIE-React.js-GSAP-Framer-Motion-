import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router";

interface ProviderProps {
  children: React.ReactNode;
}

interface ProvidersValueType {
  location: object;
  SmoothScrollAnimation: (duration: number) => void;
}

const webContext = createContext<ProvidersValueType | undefined>(undefined);

const WebsiteContext: React.FC<ProviderProps> = ({ children }) => {
  const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();

  // const prevPathName: React.MutableRefObject<string> = useRef(
  //   location.pathname
  // );

  // useEffect(() => {
  //   if (prevPathName.current !== location.pathname) {
  //     searchParams.delete("type");
  //     setSearchParams(searchParams);
  //     prevPathName.current = location.pathname;
  //   }
  // }, [location.pathname]);

  useEffect(
    function () {
      const scrollToTop = setTimeout(() => {
        SmoothScrollAnimation(300);
      }, 100);

      return () => clearTimeout(scrollToTop);
    },
    [location.pathname]
  );

  function SmoothScrollAnimation(duration: number) {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number): void => {
      const lapsed = currentTime - startTime;
      const progress = Math.min(lapsed / duration, 1);
      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start - start * easeInOutQuad);

      if (lapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
    requestAnimationFrame(animateScroll);
  }

  return (
    <webContext.Provider
      value={{
        location,
        SmoothScrollAnimation,
      }}
    >
      {children}
    </webContext.Provider>
  );
};

const useProvider = (): ProvidersValueType => {
  const context = useContext(webContext);
  if (context === undefined) throw new Error("contexts was used outside:)");
  return context;
};

export { WebsiteContext, useProvider };
