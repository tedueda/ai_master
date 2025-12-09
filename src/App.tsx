import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import AITraining from './components/AITraining';
import Subsidy from './components/Subsidy';
import Instructor from './components/Instructor';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <AITraining />
      <Curriculum />
      <Instructor />
      <Subsidy />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
