import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import PublicationList from './components/PublicationList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white" id="home">
      {/* Navigation */}
      <Navigation />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Intro / Bio */}
        <Hero />

        {/* News */}
        <NewsSection />

        {/* Publications */}
        <PublicationList />

      </main>

      {/* Footer / Contact */}
      <Footer />
    </div>
  );
}

export default App;