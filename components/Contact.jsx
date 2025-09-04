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
      className="text-center my-4 px-4 sm:px-8 lg:px-[12%] scroll-mt-36"
    >
      <h4 className="text-gray-500 uppercase tracking-widest text-sm sm:text-base font-ovo mb-2 flex items-center justify-center gap-2">
        <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
        Any Queries
        <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
      </h4>
      <h2 className="text-3xl sm:text-5xl font-ovo font-bold">Contact Me</h2>

      <form onSubmit={onSubmit} className="max-w-3xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            name="name"
            value={formData.name}
            onChange={onChange}
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={onChange}
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white resize-none mb-6"
          rows="6"
          placeholder="Enter your message"
          required
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              Submit now
              <Image
                src={assets.right_arrow_white}
                alt="right arrow"
                className="w-4"
              />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
