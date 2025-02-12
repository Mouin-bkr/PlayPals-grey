"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type React from "react"; // Added import for React

interface ContactFormProps {
  formType: "general" | "business" | "support" | "press";
}

const ContactForm: React.FC<ContactFormProps> = ({ formType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your server
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      {formType === "business" && (
        <>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <select
            name="projectType"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Project Type</option>
            <option value="game">Game Development</option>
            <option value="web">Web Development</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="budget"
            placeholder="Budget Range"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="timeline"
            placeholder="Project Timeline"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </>
      )}
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-2 border rounded"
        rows={4}
        onChange={handleChange}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-zinc-700 transition-colors duration-300 flex items-center"
      >
        <Send className="mr-2" size={18} />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
