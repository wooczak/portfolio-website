import HeroSection from "./sections/HeroSection"
import Navigation from "./sections/Navigation"
import Opinions from "./sections/Opinions"
import ProjectsOverview from "./sections/ProjectsOverview"

function App() {
  return (
    <main className="text-white bg-black px-5">
      <Navigation />
      <HeroSection />
      <ProjectsOverview />
      <Opinions />
    </main>
  )
}

export default App
