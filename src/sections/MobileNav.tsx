import { MutableRefObject } from "react";
import { NavigationLinks } from "../assets/constants/constants";
import useMobileNav from "../hooks/useMobileNav";

type TMobileNavProps = {
  isNavOpened: boolean;
};

function MobileNav({ isNavOpened }: TMobileNavProps) {
  const { navRef, listRef } = useMobileNav(isNavOpened);

  return (
    <nav
      ref={navRef}
      className="relative top-0 left-0 w-screen h-screen bg-black mt-14 -ml-5 z-100"
    >
      <ul className="text-right text-5xl">
        {NavigationLinks?.map((navLink, index) => (
          <li
            className="translate-x-96 m-14 leading-10 font-medium
            "
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            ref={(el) =>
              (listRef!.current[index] = el)
            }
          >
            {navLink}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
