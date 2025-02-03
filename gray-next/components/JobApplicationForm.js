// components/JobApplicationForm.js
"use client"; // This is a client component in Next.js 13+

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

export default function JobApplicationForm() {
  // Step numbering:
  // 0: Welcome Screen (non-counted)
  // 1: Personal Information (counted = 1)
  // 2: Position & Experience (counted = 2)
  // 3: "Almost Done" Screen (non-counted, still count = 2)
  // 4: Portfolio & CV Upload (counted = 3)
  // 5: Additional Information (counted = 4)
  // 6: Review & Submit (counted = 5)
  const [step, setStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Calculate progress count based on current step (only counted steps)
  const getProgressCount = () => {
    if (step === 0) return 0;
    if (step === 1) return 1;
    if (step === 2) return 2;
    if (step === 3) return 2; // "almost done" does not increase count
    if (step === 4) return 3;
    if (step === 5) return 4;
    if (step === 6) return 5;
    return 0;
  };

  const totalCountedSteps = 5;
  const progressCount = getProgressCount();
  const progress = Math.round((progressCount / totalCountedSteps) * 100);

  const onSubmit = (data) => {
    console.log("Final Data:", data);
    alert("Application submitted successfully!");
  };

  // Framer Motion variants
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-black h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {step !== 0 && (
          <p className="text-center mt-2">{progress}% Completed</p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div className="text-center">
                <img
                  src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif?cid=790b76117g2p44dcg0c84ekbdwltu8lx78azays38tu5tcqa&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="Welcome"
                  className="w-57 mx-auto mb-4"
                />

                <p className="mb-4">
                  We’re thrilled that you’re considering applying. Learn more
                  about our vibrant community and modern work culture.
                </p>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Start Application
                </button>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="mb-4">
                  <label>Full Name</label>
                  <input
                    {...register("fullName", {
                      required: "Name is required",
                      minLength: { value: 2, message: "Min 2 characters" },
                    })}
                    className="w-full border p-2 rounded mt-1"
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full border p-2 rounded mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Position & Experience
                </h2>
                <div className="mb-4">
                  <label>Position Applying For</label>
                  <select
                    {...register("position", {
                      required: "Please select a position",
                    })}
                    className="w-full border p-2 rounded mt-1"
                  >
                    <option value="">Select...</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="product_manager">Product Manager</option>
                  </select>
                  {errors.position && (
                    <p className="text-red-500">{errors.position.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label>Years of Experience</label>
                  <input
                    type="number"
                    {...register("experience", {
                      required: "Experience is required",
                      min: { value: 0, message: "Cannot be negative" },
                    })}
                    className="w-full border p-2 rounded mt-1"
                  />
                  {errors.experience && (
                    <p className="text-red-500">{errors.experience.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label>Key Skills (comma separated)</label>
                  <input
                    {...register("skills")}
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <img
                  src="https://media.giphy.com/media/xUPJPes93VYAtALFxS/giphy.gif?cid=ecf05e47w6efw75xyi70041c7ndpul9vfdlpfeb0bdf2kp3x&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  alt="Almost Done"
                  className="w-56 mx-auto mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Almost Done!</h2>
                <p className="mb-4">
                  You’re nearly there. Get ready to share your portfolio and
                  upload your CV.
                </p>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Portfolio & CV Upload
                </h2>
                <div className="mb-4">
                  <label>Portfolio Link</label>
                  <input
                    type="url"
                    {...register("portfolio", {
                      required: "Portfolio link is required",
                    })}
                    className="w-full border p-2 rounded mt-1"
                  />
                  {errors.portfolio && (
                    <p className="text-red-500">{errors.portfolio.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label>Upload CV (PDF only, max 5MB)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    {...register("cv", { required: "CV is required" })}
                    className="w-full mt-1"
                  />
                  {errors.cv && (
                    <p className="text-red-500">{errors.cv.message}</p>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(5)}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Additional Information
                </h2>
                <div className="mb-4">
                  <label>Why do you want to join PlayPals Studio?</label>
                  <textarea
                    {...register("motivation", {
                      required: "This field is required",
                      minLength: {
                        value: 50,
                        message: "Please provide at least 50 characters",
                      },
                    })}
                    className="w-full border p-2 rounded mt-1"
                  ></textarea>
                  {errors.motivation && (
                    <p className="text-red-500">{errors.motivation.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label>LinkedIn or Other Profile</label>
                  <input
                    type="url"
                    {...register("profile")}
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(6)}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Review & Submit</h2>
                <p className="mb-4 text-gray-700">
                  Please review your information before submitting.
                </p>
                {/* Optionally, you could display a summary of form data here */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(5)}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
}
