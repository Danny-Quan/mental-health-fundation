import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Error from "./pages/Error";
import BlogPage from "./pages/BlogPage";
import SinglePost from "./pages/SinglePost";
import ServicesPage from "./pages/ServicesPage";
import SupportPage from "./pages/SupportPage";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/support-us" element={<SupportPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id/:slug" element={<SinglePost />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
