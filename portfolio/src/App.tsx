import Header from './components/Header'
import HeroWalletSection from './components/HeroWalletSection'
import ProjectsSection from './components/ProjectsSection'
import MetricsSection from './components/MetricsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SideNav from './components/SideNav'

function App() {
  return (
    <div className="bg-[#f9f9f7] text-[#1a1c1b] min-h-screen antialiased overflow-x-hidden selection:bg-[#dbe1ff] selection:text-[#00174b]">
      <Header />
      <SideNav />
      <main className="w-full pt-16 min-h-[calc(100vh-4rem)]">
        <div className="max-w-[1120px] mx-auto px-3 sm:px-6 lg:px-12">
          <div className="flex flex-col w-full relative">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 pointer-events-none z-0 paper-texture" />
            <HeroWalletSection />
            <ProjectsSection />
            <MetricsSection />
            <ExperienceSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
