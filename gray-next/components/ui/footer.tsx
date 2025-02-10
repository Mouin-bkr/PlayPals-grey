"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "@/public/images/logo.jpeg";

interface FormData {
  name: string;
  email: string;
  message: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  contactInfo: string;
}

export default function ContactFooter() {
  const [formData, setFormData] = useState<FormData>({
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border rounded-lg"
                rows={4}
                onChange={handleChange}
              ></textarea>

              {/* Business Inquiry Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Business Inquiry</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name (if applicable)"
                    className="w-full p-3 border rounded-lg"
                    onChange={handleChange}
                  />
                  <select
                    name="projectType"
                    className="w-full p-3 border rounded-lg"
                    onChange={handleChange}
                  >
                    <option value="">Select Project Type</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Other">Other</option>
                  </select>
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
                </div>
                <textarea
                  name="description"
                  placeholder="Project Description"
                  className="w-full p-3 border rounded-lg mt-4"
                  rows={3}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Company Info and Map */}
          <div className="space-y-8">
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src={Logo || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt="Logo"
                  className="rounded-full"
                />
              </Link>
              <h3 className="text-2xl font-bold mt-4 mb-2">PlayPals Studio</h3>
              <p className="text-gray-600 mb-4">
                Crafting immersive gaming experiences and cutting-edge web
                solutions.
              </p>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail size={18} /> contact@playpals.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} /> +99 99 999 99
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={18} /> 77 PlayPals St, Tunis
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.95373631590466!3d-37.81627974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e97b60b3baf4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632738732452!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h6 className="text-sm font-semibold text-gray-800 mb-3">
                Company
              </h6>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm font-semibold text-gray-800 mb-3">
                Resources
              </h6>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm font-semibold text-gray-800 mb-3">
                Services
              </h6>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Game Development
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-sm font-semibold text-gray-800 mb-3">
                Legal
              </h6>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-black transition"
                    href="#0"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-center text-gray-600">
          &copy; {new Date().getFullYear()} PlayPals Studio. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
