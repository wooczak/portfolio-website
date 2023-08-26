import { useState } from "react";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  function handleHamburgerClick() {
    setIsNavOpened((prevState) => !prevState);
  }

  return (
    <nav className="font-cabinet-grotesk py-5 sticky top-0">
      <p className="text-xl inline-block">
        Kacper<span className="font-bold">Łuczak</span>
      </p>

      <div
        className="w-4 flex flex-col gap-1 float-right mt-[7px] mb-[7px]"
        onClick={handleHamburgerClick}
      >
        <span className="h-0.5 w-full bg-white"></span>
        <span className="h-0.5 w-full bg-white"></span>
        <span className="h-0.5 w-full bg-white"></span>
      </div>
      <MobileNav isNavOpened={isNavOpened} />
    </nav>
  );
};

export default Navigation;
