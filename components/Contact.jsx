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
      className="text-center px-4 sm:px-8 lg:px-[12%] scroll-mt-36 py-24 pb-[calc(8rem+env(safe-area-inset-bottom))] sm:pb-[calc(10rem+env(safe-area-inset-bottom))] relative overflow-hidden bg-transparent"
    >
      {/* Background removed to show main theme */}
      <div className="relative z-10">
        <h4 className="text-gray-600 dark:text-gray-300 uppercase tracking-widest text-sm sm:text-base font-ovo mb-4 flex items-center justify-center gap-3">
        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-purple-500 inline-block"></span>
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
          Any Queries
        </span>
        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-pink-500 inline-block"></span>
      </h4>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-ovo font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
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
              className={`w-full p-4 outline-none border-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300 ${
                focused === "name"
                  ? "border-purple-500 shadow-lg shadow-purple-500/30"
                  : "border-gray-300 dark:border-gray-600"
              } focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/30`}
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
              className={`w-full p-4 outline-none border-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all duration-300 ${
                focused === "email"
                  ? "border-purple-500 shadow-lg shadow-purple-500/30"
                  : "border-gray-300 dark:border-gray-600"
              } focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/30`}
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
            className={`w-full p-4 outline-none border-2 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none transition-all duration-300 ${
              focused === "message"
                ? "border-purple-500 shadow-lg shadow-purple-500/30"
                : "border-gray-300 dark:border-gray-600"
            } focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/30`}
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
