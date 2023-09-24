import gsap from "gsap";
import { MutableRefObject, useLayoutEffect, useRef } from "react";

function useMobileNav(isNavOpened: boolean) {
  const navRef = useRef<MutableRefObject<HTMLElement[]>>(null);
  const listRef = useRef<MutableRefObject<HTMLLIElement[]>[]>([]);

  useLayoutEffect(() => {
    let ctx: gsap.Context;

    if (isNavOpened) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navRef?.current?.classList.remove("hidden");
      gsap.to(navRef?.current, { x: 0, duration: 1 });
      ctx = gsap.context(() => {
        listRef?.current?.forEach((item, index) => {
          gsap.to(item, { x: 30, delay: index / 5 });
        });
      });
    }

    if (!isNavOpened) {
      ctx = gsap.context(() => {
        gsap.to(navRef?.current, { x: 500, duration: 1 });
        listRef?.current?.forEach((item, index) => {
          gsap.from(item, { x: 10, delay: index / 5 });
        });
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(() => navRef?.current?.classList.add("hidden"), 1000);
    }

    return () => ctx.revert();
  }, [isNavOpened, navRef]);

  return { navRef, listRef };
}

export default useMobileNav;
