import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getButtonAppearance } from "utils/button";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import MobileNavMenu from "./mobile-nav-menu";
import ButtonLink from "./button-link";
import Image from "next/image";
import CustomLink from "./custom-link";
import LocaleSwitch from "../locale-switch";
import { throttle } from "utils/performance";

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter();

  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);

  const currentPage = `/${pageContext.slug}`;

  const scrolledDownRef = useRef(false);
  const [scrolledDown, setScrolledDown] = useState(scrolledDownRef.current);
  const scrollDistance = 200;

  useEffect(() => {
    scrolledDownRef.current = scrollY > scrollDistance;
    setScrolledDown(scrolledDownRef.current);

    window.addEventListener(
      "scroll",
      throttle(() => {
        if (scrollY > scrollDistance != scrolledDownRef.current) {
          scrolledDownRef.current = !scrolledDownRef.current;
          setScrolledDown(scrolledDownRef.current);
        }
      }, 250)
    );
  }, []);

  return (
    <>
      {/* The actual navbar */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex h-20 bg-black transition duration-1000 2xl:h-32`}
      >
        <div className="mx-4 flex grow flex-row justify-between lg:mx-8 2xl:mx-16">
          {/* Content aligned to the left */}
          <div className="flex grow flex-row justify-between">
            <Link href="/">
              <a className="font-basker inline-flex items-center text-xl text-primary-600 md:text-base lg:text-2xl 2xl:text-[1.4vw] 2xl:tracking-wider">
                CORP
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="ml-6 mr-4 hidden list-none flex-row gap-3 lg:mr-8 lg:flex xl:mr-16 2xl:mr-[5vw] 2xl:gap-[1.8vw]">
              {navbar.links.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`flex items-center ${
                    navLink.url == currentPage && "border-b-2 border-white"
                  }`}
                >
                  <CustomLink link={navLink} locale={router.locale}>
                    <div className="px-2 py-1 text-xs uppercase text-primary-600 hover:text-primary-300 lg:text-base lg:font-medium 2xl:text-[1.1vw]">
                      {navLink.label}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            {/* Locale Switch Mobile */}
            {pageContext.localizedPaths.length > 0 && (
              <div className="lg:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="flex lg:hidden"
            >
              <Image width="64" height="40" src="/icons/menu-icon.svg" />
            </button>
            {/* CTA button on desktop */}

            {/* Locale Switch Desktop */}
            {pageContext.localizedPaths.length > 0 && (
              <div className="hidden lg:block">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  );
};

export default Navbar;
