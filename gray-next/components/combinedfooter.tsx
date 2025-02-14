"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "./contactform";
import ContactForm2 from "./contactform2";

// Mock data for job listings
const jobListings = [
  {
    id: 1,
    title: "Senior Game Developer",
    department: "Game Development",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    department: "Web Development",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Los Angeles, CA",
    type: "Full-time",
  },
];

const CombinedFooter = () => {
  const [activeTab, setActiveTab] = useState("careers");

  return (
    <footer id="footer" className="bg-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-6">
                <button
                  className={`mr-4 pb-2 ${
                    activeTab === "careers" ? "border-b-2 border-zinc-900" : ""
                  }`}
                  onClick={() => setActiveTab("careers")}
                >
                  Careers
                </button>
                <button
                  className={`mr-4 pb-2 ${
                    activeTab === "contact" ? "border-b-2 border-zinc-900" : ""
                  }`}
                  onClick={() => setActiveTab("contact")}
                >
                  Contact Us
                </button>
                <button
                  className={`mr-4 pb-2 ${
                    activeTab === "buisnes" ? "border-b-2 border-zinc-900" : ""
                  }`}
                  onClick={() => setActiveTab("buisnes")}
                >
                  Buisness Inquiry
                </button>
              </div>

              {activeTab === "careers" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                  <div className="space-y-4">
                    {jobListings.map((job) => (
                      <motion.div

                        key={job.id}
                        className="bg-zinc-50 p-4 rounded-lg cursor-pointer transition-shadow duration-300 hover:shadow-md"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-zinc-600">
                          {job.department} • {job.location} • {job.type}
                        </p>
                        <Link
                          href={`/apply0`}
                          className="text-zinc-900 hover:underline mt-2 inline-block"
                        >
                          Apply
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    href="/careers"
                    className="mt-4 inline-block text-zinc-900 hover:underline"
                  >
                    View All Positions
                  </Link>
                </div>
              )}

              {activeTab === "contact" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <ContactForm formType="general" />
                </div>
              )}

              {activeTab === "buisnes" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Buisness</h2>
                  <ContactForm2 />
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  className="w-full h-full rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919576!2d-74.00425878428698!3d40.71277637933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1a6d8af8b3%3A0x6e1f9c0c9c0c0c0c!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620147778136!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="space-y-2 text-zinc-600">
                <p className="flex items-center">
                  <Mail className="mr-2" size={20} /> contact@playpals.com
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={20} /> +111 234 567 890
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2" size={20} /> tunis
                </p>
              </div>
              <div className="mt-4 flex justify-between text-zinc-600 text-sm">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>

                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-zinc-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} PlayPals Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CombinedFooter;
