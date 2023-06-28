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
import MenuIcon from "../SVGicons/MenuIcon";

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
        className={`fixed inset-x-0 top-0 z-50 flex h-20 transition duration-1000 2xl:h-32`}
      >
        <div className="container flex grow flex-row justify-between">
          {/* Content aligned to the left */}
          <div className="flex items-center">
            <Link href="/">
              <a>
                <Image
                  src="/logo/logo.svg"
                  width={160}
                  height={34}
                  alt="logo de digitalmix"
                />
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Locale Switch Mobile */}
            {pageContext.localizedPaths.length > 0 && (
              <div className="lg:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
            {/* Hamburger menu on mobile */}
            <button onClick={() => setMobileMenuIsShown(true)} className="flex">
              <MenuIcon />
            </button>

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
