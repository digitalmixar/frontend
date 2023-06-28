import { useLockBodyScroll } from "utils/hooks";
import { getButtonAppearance } from "utils/button";
import ButtonLink from "./button-link";
import Image from "next/image";
import CustomLink from "./custom-link";
import CloseIcon from "../SVGicons/CloseIcon";

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  return (
    <div className="fixed inset-0 z-50 overflow-y-scroll bg-primary-925 pb-6 text-primary-50">
      <div className="container flex h-full flex-col">
        {/* Top section */}
        <div className="flex h-20 justify-end 2xl:h-32">
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <CloseIcon />
          </button>
        </div>
        {/* Bottom section */}
        <div className="mx-auto mt-8 mb-auto flex w-full flex-col items-center pb-24">
          <ul className="mb-10 flex list-none flex-col items-baseline text-3xl tracking-wider">
            {navbar.links.map((navLink) => (
              <li onClick={closeSelf} key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="py-3 text-center uppercase hover:text-primary-300">
                    <span>{navLink.label}</span>
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
