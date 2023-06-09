import { ReactElement, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import Navbar from "./layout/header/navbar";
import Footer from "./layout/footer/footer";

// routes
import Home from "./routes/home";
const Galary = lazy(() => import("./routes/galary"));
const GalaryItem = lazy(() => import("./routes/galaryItem"));
const ErrorPage = lazy(() => import("./errorPage"));

const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galary" element={<Galary />} />
            <Route path="/galary/:id" element={<GalaryItem />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
};

export default App;
