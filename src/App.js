import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from "./view/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./view/ContactPage/Contact";
import Products from "./view/ProductPage/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route element={<App />}> */}
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
        {/* </Route> */}
      </Routes>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
