"use client";
import React from "react";
import Image from "next/image";
import { offerPackages } from "@/assets/assets";

const SellOffer = () => {
  const trustSignals = [
    { label: "Apps & sites shipped", value: "20+" },
    { label: "Upwork rating", value: "100% ★★★★★" },
    { label: "Avg. response time", value: "< 12 hrs" },
  ];

  return (
    <section
      id="sell-offer"
      className="w-full px-4 sm:px-8 lg:px-[12%] py-24 relative overflow-hidden scroll-mt-24 bg-transparent"
    >
      {/* Background removed to show main theme */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h4 className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
          <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500 inline-block"></span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            Sell Offer
          </span>
          <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-500 inline-block"></span>
        </h4>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold mb-6 text-white">
          Engagement Packages
        </h2>
        <p className="text-white/90 text-lg leading-relaxed">
          Choose the collaboration style that fits your roadmap. Each offer is
          a fixed-scope sprint with clarity on deliverables, timeline, and
          investment before we start.
        </p>
      </div>

      <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 mt-16 max-w-7xl mx-auto relative z-10">
        {offerPackages.map(
          ({ icon, title, description, deliverables, timeline, price }, idx) => (
            <article
              key={title}
              className="group relative rounded-3xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col overflow-hidden
              hover:border-purple-300 dark:hover:border-purple-600
              hover:bg-gradient-to-br hover:from-white hover:via-purple-50/50 hover:to-pink-50/50 dark:hover:from-gray-800 dark:hover:via-purple-900/20 dark:hover:to-pink-900/20"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Image src={icon} alt={title} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{timeline}</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1 leading-relaxed">
                  {description}
                </p>

                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  {deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 inline-block flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between text-gray-800 dark:text-gray-200 font-bold text-lg mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {price}
                  </span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Fixed-scope sprint
                  </span>
                </div>

                <a
                  href="#contact"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 w-full"
                >
                  <span>Book a discovery call</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </article>
          )
        )}
      </div>

      {/* Trust Signals */}
      <div className="mt-20 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto relative z-10">
        {trustSignals.map(({ label, value }) => (
          <div
            key={label}
            className="group rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm py-8 px-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300
            hover:border-purple-300 dark:hover:border-purple-600
            hover:bg-gradient-to-br hover:from-white hover:to-purple-50/50 dark:hover:from-gray-800 dark:hover:to-purple-900/20"
          >
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {value}
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellOffer;
