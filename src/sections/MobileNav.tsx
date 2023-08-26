import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

type TMobileNavProps = {
  isNavOpened: boolean;
};

function MobileNav({ isNavOpened }: TMobileNavProps) {
  const list = ["Projects overview", "Projects", "About me", "Contact"];
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    let ctx: gsap.Context;

    if (isNavOpened) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navRef.current.classList.remove("hidden");
      gsap.to(navRef.current, { x: 0, duration: 1 });
      ctx = gsap.context(() => {
        listRef?.current.forEach((item, index) => {
          gsap.to(item, { x: 30, delay: index / 5 });
        });
      });
    }

    if (!isNavOpened) {
      ctx = gsap.context(() => {
        gsap.to(navRef.current, { x: 500, duration: 1 });
        listRef?.current.forEach((item, index) => {
          gsap.from(item, { x: 10, delay: index / 5 });
        });
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => navRef.current.classList.add("hidden"), 1000);
    }

    return () => ctx.revert();
  }, [isNavOpened, navRef]);

  return (
    <nav
      ref={navRef}
      className="absolute top-0 left-0 h-mobile-nav w-screen h-screen bg-black px-5 py-10 mt-14 -ml-5 translate-x-96"
    >
      <ul className="text-right text-6xl vertical-gap">
        {list?.map((navLink, index) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <li
            className="translate-x-96 m-10"
            ref={(el) => (listRef.current[index] = el)}
          >
            {navLink}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
