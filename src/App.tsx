import HeroSection from "./sections/HeroSection"
import Navigation from "./sections/Navigation"
import ProjectsOverview from "./sections/ProjectsOverview"

function App() {
  return (
    <main className="text-white bg-black px-5">
      <Navigation />
      <HeroSection />
      <ProjectsOverview />
    </main>
  )
}

export default App
