"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface FloatingPathsProps {
  position: number;
}

function FloatingPaths({ position }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full text-slate-950 dark:text-white opacity-50"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  position?: string;
  experience?: number;
  skills?: string;
  portfolio?: string;
  cv?: FileList;
  motivation?: string;
}

export default function JobApplicationForm() {
  const [step, setStep] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const totalSteps = 6;
  const progress = Math.round(((step + 1) / totalSteps) * 100);

  const onSubmit = (data: FormData) => {
    console.log("Final Data:", data);
    alert("Application submitted successfully!");
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode ? "dark bg-neutral-900" : "bg-white"
      }`}
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex items-center ml-4">
            <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            {isDarkMode ? (
              <Moon className="h-5 w-5 text-gray-400 ml-2" />
            ) : (
              <Sun className="h-5 w-5 text-yellow-500 ml-2" />
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full bg-white dark:bg-neutral-800 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {getStepTitle(step)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {renderStepContent(step, register, errors)}
                  <div className="flex justify-between mt-6">
                    {step > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        className="text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-md tracking-normal transition px-2 py-1"
                        onClick={() => setStep(step - 1)}
                      >
                        Back
                      </Button>
                    )}
                    {step < totalSteps - 1 ? (
                      <Button
                        type="button"
                        className="text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-md tracking-normal transition px-2 py-1"
                        onClick={() => setStep(step + 1)}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-md tracking-normal transition px-2 py-1"
                      >
                        Submit Application
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function getStepTitle(step: number): string {
  const titles = [
    "Welcome",
    "Personal Information",
    "Position & Experience",
    "Almost Done",
    "Portfolio & CV Upload",
    "Additional Information",
    "Review & Submit",
  ];
  return titles[step];
}

function renderStepContent(step: number, register: any, errors: any) {
  switch (step) {
    case 0:
      return (
        <div className="text-center">
          <img
            src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif"
            alt="Welcome"
            className="w-57 mx-auto mb-4"
          />
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We're thrilled that you're considering applying. Learn more about
            our vibrant community and modern work culture.
          </p>
        </div>
      );
    case 1:
      return (
        <>
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="fullName"
                className="text-gray-700 dark:text-gray-300"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                className="mt-1 w-full bg-white border border-zinc-200 focus:border-zinc-400 shadow shadow-black/5 rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-zinc-700 dark:text-white dark:placeholder-zinc-500"
                {...register("fullName", {
                  required: "Name is required",
                  minLength: { value: 2, message: "Min 2 characters" },
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="mt-1 w-full bg-white border border-zinc-200 focus:border-zinc-400 shadow shadow-black/5 rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-zinc-700 dark:text-white dark:placeholder-zinc-500"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="phone"
                className="text-gray-700 dark:text-gray-300"
              >
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                className="mt-1 w-full bg-white border border-zinc-200 focus:border-zinc-400 shadow shadow-black/5 rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-zinc-700 dark:text-white dark:placeholder-zinc-500"
                {...register("phone")}
              />
            </div>
          </div>
        </>
      );
    // ... (implement other steps similarly)
    default:
      return null;
  }
}
