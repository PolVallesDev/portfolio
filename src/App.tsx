import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroScroller } from './components/HeroScroller';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink-950 text-washi selection:bg-cinnabar selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <HeroScroller />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
