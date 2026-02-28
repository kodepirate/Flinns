import React, { useState, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConnectWalletModal from './components/ConnectWalletModal';

// Keeping these in the background so the Hero loads instantly
const About = React.lazy(() => import('./components/About'));
const Specs = React.lazy(() => import('./components/Specs'));
const Mentorship = React.lazy(() => import('./components/Mentorship'));
const Roadmap = React.lazy(() => import('./components/Roadmap'));
const Benefits = React.lazy(() => import('./components/Benefits'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <div className="bg-ocean-depths min-h-screen font-sans selection:bg-flinns-orange selection:text-white">

      {/* Enhanced Navigation Bar */}
      <Navbar onConnectClick={() => setIsWalletModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <div id="home">
          <Hero onConnectClick={() => setIsWalletModalOpen(true)} />
        </div>

        <Suspense fallback={<div className="min-h-screen bg-[#0a192f] flex"></div>}>
          <div id="about">
            <About />
          </div>
          <div id="specs">
            <Specs />
          </div>
          <div id="mentorship">
            <Mentorship />
          </div>
          <div id="roadmap">
            <Roadmap />
          </div>
          <Benefits />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-64 bg-[#020617]"></div>}>
        <Footer />
      </Suspense>

      {/* Overlays */}
      <ConnectWalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />

    </div>
  );
}

export default App;
