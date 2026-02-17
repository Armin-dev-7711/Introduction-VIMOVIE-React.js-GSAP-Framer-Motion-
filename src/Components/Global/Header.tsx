import { menu } from "@/shared/data";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiBookmark,
  HiMenu,
  HiOutlineSearch,
  HiOutlineX,
} from "react-icons/hi";
import { Link, NavLink, useLocation } from "react-router";
import Search from "./Search";

const Header = (): JSX.Element => {
  const ref = useRef<HTMLElement | null>(null);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isPathName, setIsPathName] = useState<string>("/");
  const [isOfPage, setIsOfPage] = useState<boolean>(false);

  const { pathname }: { pathname: string } = useLocation();
  useEffect(function () {
    function handleClose(e: MouseEvent) {
      if (!(e.target instanceof Node)) return;
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpenMenu(false);
      }
    }
    document.addEventListener("click", handleClose, true);

    return () => document.removeEventListener("click", handleClose, true);
  }, []);

  useEffect(
    function () {
      if (isOpenSearch || isOpenMenu) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    },
    [isOpenSearch, isOpenMenu]
  );

  useEffect(
    function () {
      setIsOpenMenu(false);
      setIsPathName(pathname);
    },
    [pathname]
  );

  useEffect(
    function () {
      setIsOpenMenu(false);
    },
    [isOpenSearch]
  );

  useEffect(function () {
    const handleScroll = () => {
      if (window.scrollY !== 0) setIsOfPage(true);

      if (window.scrollY === 0) setIsOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full padding-x font-Anton text-texts fixed z-50 transition-all duration-500 ${
          isOfPage ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className='flex min-h-[100px] bg-transparent justify-between items-center max-container'>
          <h1 className='text-h2 sm:text-h1 uppercase'>
            <NavLink to='/'>
              <motion.span
                initial={{
                  opacity: 0,
                  transform: "translateX(-20px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                className='text-button inline-block'
              >
                Vi
              </motion.span>{" "}
              <motion.span
                initial={{
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                className='inline-block'
              >
                Mo<span className='text-button'>vi</span>e
              </motion.span>
            </NavLink>
          </h1>
          <nav className='flex items-center gap-[12px] lg:gap-[38px] max-md:hidden'>
            {menu.map(
              (item, index: number): JSX.Element => (
                <NavLink
                  className={`text-p lg:text-h6 tracking-wide transition-all hover:text-button duration-200 ease-linear ${
                    isPathName ===
                    `/${item === "Home" ? "" : item.toLowerCase()}`
                      ? "text-button"
                      : "text-texts"
                  }`}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  key={index}
                >
                  <motion.span
                    initial={{
                      opacity: 0,
                      transform: "translateY(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      transform: "translateY(0)",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                    }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                </NavLink>
              )
            )}
          </nav>
          <AnimatePresence mode='wait'>
            {isOpenMenu ? (
              <motion.nav
                ref={ref}
                key='menu'
                initial={{
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                }}
                animate={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                exit={{
                  clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                className='flex flex-col items-start gap-[24px] lg:gap-[38px] md:hidden bg-black/80 backdrop-blur-md fixed right-0 top-0 min-w-screen sm:min-w-[60vw] overflow-y-auto h-screen min-h-screen'
              >
                <div className=' mr-4 px-4 mt-4'>
                  <button
                    onClick={() => setIsOpenMenu(false)}
                    className=' bg-texts h-[40px] w-[40px] rounded-full inline-flex justify-center items-center cursor-pointer'
                  >
                    <HiOutlineX className='text-primary text-h5' />
                  </button>
                </div>
                <div className='flex flex-col gap-8 w-full justify-start my-10'>
                  {menu.map(
                    (item, index: number): JSX.Element => (
                      <NavLink
                        className={`text-h6 tracking-wide transition-all hover:text-button duration-200 ease-linear bg-texts font-[500] max-w-[80%] w-full h-[40px] inline-flex justify-center items-center rounded-md mx-auto px-10 ${
                          isPathName ===
                          `/${item === "Home" ? "" : item.toLowerCase()}`
                            ? "text-button"
                            : "text-primary"
                        }`}
                        to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                        key={index}
                      >
                        <motion.span
                          initial={{
                            opacity: 0,
                            transform: "translateY(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            transform: "translateY(0)",
                          }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2,
                          }}
                          className='inline-block'
                        >
                          {item}
                        </motion.span>
                      </NavLink>
                    )
                  )}
                </div>

                <div className='w-full flex items-center justify-center pb-10'>
                  <div className='flex items-center gap-[16px]'>
                    <search
                      onClick={() => setIsOpenSearch(true)}
                      className='bg-texts order-2 w-[40px] h-[40px] rounded-full inline-flex items-center justify-center cursor-pointer'
                    >
                      <HiOutlineSearch className='text-primary text-h5' />
                    </search>
                    <Link
                      to='/saved'
                      className='order-1 w-[40px] h-[40px] bg-texts rounded-full inline-flex justify-center items-center cursor-pointer'
                    >
                      <HiBookmark className='text-primary text-h5' />
                    </Link>
                  </div>
                </div>
              </motion.nav>
            ) : (
              <button
                onClick={() => setIsOpenMenu(true)}
                className='bg-texts order-2 w-[40px] h-[40px] rounded-full inline-flex items-center justify-center cursor-pointer md:hidden'
              >
                <HiMenu className='text-primary text-h5' />
              </button>
            )}
          </AnimatePresence>
          <div className='flex items-center gap-[16px] max-md:hidden'>
            <search
              onClick={() => setIsOpenSearch(true)}
              className='bg-texts order-2 w-[40px] h-[40px] rounded-full inline-flex items-center justify-center cursor-pointer'
            >
              <HiOutlineSearch className='text-primary text-h5' />
            </search>
            <Link
              to='/saved'
              className='order-1 w-[40px] h-[40px] bg-texts rounded-full inline-flex justify-center items-center cursor-pointer'
            >
              <HiBookmark className='text-primary text-h5' />
            </Link>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpenSearch && <Search setIsOpenSearch={setIsOpenSearch} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
