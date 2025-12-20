"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import Spinner from "./Spinner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="text-center px-4 sm:px-8 lg:px-[12%] scroll-mt-36 py-24 relative overflow-hidden"
    >
      {/* Animated Background Gradient - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.1),transparent_50%)] -z-10" />
      <div className="relative z-10">
        <h4 className="text-white/80 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-300 inline-block"></span>
        <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent font-bold">
          Any Queries
        </span>
        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-300 inline-block"></span>
      </h4>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold text-white mb-6 drop-shadow-lg">
        Contact Me
      </h2>
      <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg drop-shadow-md">
        Have a project in mind? Let's discuss how we can bring your ideas to life!
      </p>

      <form onSubmit={onSubmit} className="max-w-3xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <input
              name="name"
              value={formData.name}
              onChange={onChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              className={`w-full p-4 outline-none border-2 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder:text-white/70 transition-all duration-300 ${
                focused === "name"
                  ? "border-purple-400 shadow-lg shadow-purple-500/30"
                  : "border-white/30"
              } focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/30`}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="relative">
            <input
              name="email"
              value={formData.email}
              onChange={onChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              className={`w-full p-4 outline-none border-2 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder:text-white/70 transition-all duration-300 ${
                focused === "email"
                  ? "border-purple-400 shadow-lg shadow-purple-500/30"
                  : "border-white/30"
              } focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/30`}
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="relative mb-6">
          <textarea
            name="message"
            value={formData.message}
            onChange={onChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused("")}
            className={`w-full p-4 outline-none border-2 rounded-xl bg-white/10 backdrop-blur-md text-white placeholder:text-white/70 resize-none transition-all duration-300 ${
              focused === "message"
                ? "border-purple-400 shadow-lg shadow-purple-500/30"
                : "border-white/30"
            } focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/30`}
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mx-auto font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-2">
            {loading ? (
              <Spinner />
            ) : (
              <>
                Submit now
                <Image
                  src={assets.right_arrow_white}
                  alt="right arrow"
                  className="w-4 group-hover:translate-x-1 transition-transform"
                />
              </>
            )}
          </span>
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
