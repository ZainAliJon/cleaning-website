import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Trust from './components/Trust.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';
import BookingCTA from './components/BookingCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <Pricing />
        <Testimonials />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
