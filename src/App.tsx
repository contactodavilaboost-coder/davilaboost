import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { COLORS } from "./lib/brand";

function App() {
  return (
    <div
      className="davila-root min-h-screen font-sans antialiased"
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.bone,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif',
      }}
    >
      <style>{`
        .davila-root ::placeholder { color: rgba(245, 240, 230, 0.35) !important; }
        .davila-root input:focus, .davila-root select:focus, .davila-root textarea:focus {
          border-color: rgba(245, 240, 230, 0.3) !important;
          background-color: rgba(245, 240, 230, 0.05) !important;
        }
        .davila-root select option {
          color: #1A1A1A !important;
          background: #F5F0E6 !important;
        }
        html { scroll-behavior: smooth; }
      `}</style>

      <Header />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;