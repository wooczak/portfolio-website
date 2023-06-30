const HeroSection = () => {
  return (
    <>
      <section>
        <h1 className="py-5 tracking-tight bg-cover bg-clip-text text-transparent text-[20vw] break-words font-black leading-none bg-[url(/src/components/HeroSection/gradient.svg)]">
          HELLO! MY NAME IS KACPER
        </h1>
        <p className="font-jet-brains text-sm leading-5">
          I code stuff so users know what to do and can be happy when they click
          through any Web-related applications. And so that I can pay for my
          cats' premium food. So I guess, you can call me a{" "}
          <span>Front-End Engineer</span>.<br />
          <br />I thrive to keep my code clean as{" "}
          <span className="relative">
            <img src="/src/assets/duck.svg" className="w-full inline absolute -translate-y-2"/>
            f**k
          </span>
          , making it as high-quality and up-to-date with modern standards as
          possible, without over-engineering things. I am pro-active, loyal an
        </p>
        <div className="flex font-jet-brains gap-4 items-center pt-5 text-sm">
          <p className="p-2 border-solid border-[0.8px]">linkedin</p>
          <span className="w-[5px] h-[5px] aspect-square rounded-full bg-yellow-200"></span>
          <p className="p-2 border-solid border-width border-[0.8px]">github</p>
        </div>
        <img src="/src/assets/photo-min.png" className="my-8" />
      </section>
    </>
  );
};

export default HeroSection;
