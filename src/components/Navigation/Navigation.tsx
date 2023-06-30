const Navigation = () => {
  return (
    <nav className="font-cabinet-grotesk py-5 flex justify-between items-center">
      <p className="text-lg">
        Kacper<span className="font-bold">Łuczak</span>
      </p>
      <div className="w-4 flex flex-col gap-1">
        <span className="h-0.5 w-full bg-white"></span>
        <span className="h-0.5 w-full bg-white"></span>
        <span className="h-0.5 w-full bg-white"></span>
      </div>
    </nav>
  );
};

export default Navigation;
