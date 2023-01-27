import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Support from "./components/Support";
import Appointment from "./components/Appointment";
import BookAppointment from "./components/BookAppointment";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <BookAppointment />
        <About />
      </div>
      <Services />
      <div className="container">
        <Team />
      </div>
      <Appointment />
      <div className="container">
        <Testimonials />
        <Events />
        <Support />
      </div>
    </React.Fragment>
  );
}

export default App;
