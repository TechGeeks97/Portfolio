"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import SellOffer from "@/components/SellOffer";
import ClientReview from "@/components/ClientReview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div 
      className="w-full min-h-screen min-h-[100dvh] pb-[max(env(safe-area-inset-bottom),20px)]"
      style={{
        background: 'linear-gradient(to bottom right, #111827, #1f2937, #111827)',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <SellOffer />
      <ClientReview />
      <Contact />
      <Footer />
      {/* Extra spacer for iPhone 14 Pro Max and similar devices */}
      <div className="h-[max(env(safe-area-inset-bottom),40px)] bg-transparent" aria-hidden="true" />
      {/* <BackToTop /> */}
    </div>
  );
}
