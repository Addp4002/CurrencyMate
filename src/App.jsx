import { Routes, Route, Link } from "react-router-dom";
import Converter from "./pages/Converter";
import About from "./pages/About";
import MultiConvert from "./pages/MultiConvert";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">💱 Currency Converter</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/multi-convert" className="hover:underline">
            Multi Convert
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>

      {/* Routing Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/multi-convert" element={<MultiConvert />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
