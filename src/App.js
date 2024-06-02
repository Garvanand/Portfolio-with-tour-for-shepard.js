import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Shepherd from 'shepherd.js';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [startTour, setStartTour] = useState(true);

  const rootRef = useRef(null);

  useEffect(() => {
    if (!startTour) return;

    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true,
        when: {
          show: () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        },
        modalOverlayOpeningPadding: 20
      },
      useModalOverlay: true,
    });

    tour.addStep({
      id: 'intro-step',
      text: 'Welcome to the website tour! This guide will help you navigate through the different sections of the website.',
      attachTo: {
        element: '.intro-element',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'works-step',
      text: 'This is the Works section. It showcases our latest projects and works.',
      attachTo: {
        element: '.works-element',
        on: 'bottom',
      },
      scrollTo: true,
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
      beforeShowPromise: function() {
        document.querySelector('.works-element')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        return new Promise(resolve => setTimeout(resolve, 500));
      },
    });

    tour.addStep({
      id: 'portfolio-step',
      text: 'Here you can find our portfolio. Browse through our projects and explore our work in detail.',
      attachTo: {
        element: '.portfolio-element',
        on: 'bottom',
      },
      scrollTo: true,
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
      beforeShowPromise: function() {
        document.querySelector('.portfolio-element')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        return new Promise(resolve => setTimeout(resolve, 500));
      },
    });

    tour.addStep({
      id: 'contact-step',
      text: 'Feel free to reach out to us through our contact form. We would love to hear from you!',
      attachTo: {
        element: '.contact-element',
        on: 'bottom',
      },
      scrollTo: true,
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
      beforeShowPromise: function() {
        document.querySelector('.contact-element')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        return new Promise(resolve => setTimeout(resolve, 500));
      },
    });

    tour.addStep({
      id: 'social-media-step',
      text: 'Explore our social media profiles by clicking on the icons below.',
      attachTo: {
        element: '.social-media-icons',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'certifications-step',
      text: 'Discover our certifications and qualifications by navigating to the Certifications section.',
      attachTo: {
        element: '.certifications-element',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'dark-mode-step',
      text: 'Toggle between Light and Dark modes by clicking on the theme switcher.',
      attachTo: {
        element: '.theme-switcher',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Next',
          action: tour.next,
        },
      ],
    });

    tour.addStep({
      id: 'description-step',
      text: 'This website is designed to showcase our projects, skills, and achievements. Explore and enjoy your visit!',
      attachTo: {
        element: '.description-element',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Previous',
          action: tour.back,
        },
        {
          text: 'Finish',
          action: tour.next,
        },
      ],
    });

    tour.on('complete', () => {
      alert('Website tour completed! You can now explore the website on your own.');
    });

    tour.start();

    return () => {
      tour.cancel();
    };
  }, [startTour]);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
      ref={rootRef}
    >
      <Navbar />
      <Intro />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />

      {!startTour && (
        <button onClick={() => setStartTour(true)}>Start Tour</button>
      )}
    </div>
  );
}

export default App;
