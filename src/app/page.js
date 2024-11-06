import React from "react";
import Header from "./components/homepage/Header.jsx";
import ServiceSlider from "./components/homepage/ServiceSlider.jsx";
import BuildingSection from "./components/homepage/BuildingSection.jsx";
import WorkApproach from "./components/homepage/WorkApproach.jsx";
import DevelopmentProcess from "./components/homepage/DevelopmentProcess.jsx";
import CTA from "./components/homepage/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <ServiceSlider />
      <BuildingSection />
      <WorkApproach />
      <DevelopmentProcess />
      <CTA />
      <Footer />
    </main>
  );
}
