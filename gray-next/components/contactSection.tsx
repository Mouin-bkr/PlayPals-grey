"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-100 rounded-2xl">
      {/* Google Map */}
      <div className="w-full lg:w-1/2">
        <iframe
          className="w-full h-80 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.95373631590466!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e97b60b3baf4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632738732452!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 border rounded-lg"
            rows={4}
            onChange={handleChange}
          ></textarea>

          {/* Business Inquiry Section */}
          <h3 className="text-xl font-semibold">Business Inquiry</h3>
          <input
            type="text"
            name="company"
            placeholder="Company Name (if applicable)"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="projectType"
            placeholder="Project Type (Game/Web/Other)"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Project Description"
            className="w-full p-3 border rounded-lg"
            rows={3}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="budget"
            placeholder="Budget Range"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactInfo"
            placeholder="Contact Information"
            className="w-full p-3 border rounded-lg"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-6 text-gray-700">
          <p className="flex items-center gap-2">
            <Mail size={20} /> contact@playpals.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={20} /> +1 234 567 890
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={20} /> 123 PlayPals St, New York, NY
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
