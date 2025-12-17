"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import SellOffer from "@/components/SellOffer";
import ClientReview from "@/components/ClientReview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <Header />
      <About />
      <Services />
      {/* <Works /> */}
      <SellOffer />
      <ClientReview />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
