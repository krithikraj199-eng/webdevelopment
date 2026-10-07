import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#131316] text-[#FAFAFA] font-sans flex flex-col selection:bg-[#4F46E5]/40 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Selected Work */}
        <SelectedWork />

        {/* 4. About */}
        <About />

        {/* 5. Capabilities */}
        <Capabilities />

        {/* 6. Experience */}
        <Experience />

        {/* 7. Education */}
        <Education />

        {/* 8. Credentials & Involvement */}
        <Credentials />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export default App;
