"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

// Import your custom Select component
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

// ------------------------
// FloatingPaths Component
// ------------------------
interface FloatingPathsProps {
  position: number;
}

function FloatingPaths({ position }: FloatingPathsProps) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 5 * position}`,
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

// ------------------------
// Zod Schema & Form Type
// ------------------------
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  position: z.string().optional(), // now set via Select
  experience: z.preprocess(
    (a) => (a === "" ? undefined : Number(a)),
    z.number().optional()
  ),
  skills: z.string().optional(),
  portfolio: z.string().optional(),
  cv: z
    .any()
    .refine((files) => files && files.length > 0, "CV is required")
    .refine((files) => files && files[0]?.size <= 2 * 1024 * 1024, "CV must be less than 2MB")
    .refine(
      (files) =>
        files &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(files[0]?.type),
      "Invalid file format. Only PDF or DOC are allowed"
    ),
  motivation: z.string().optional(),
  darkMode: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ------------------------
// Step Fields Validation Mapping
// ------------------------
// Define which field names should be validated at each step:
const stepFieldNames: { [key: number]: (keyof FormData)[] } = {
  1: ["fullName", "email", "phone"],
  2: ["position", "experience", "skills"],
  4: ["portfolio", "cv"],
  5: ["motivation"],
};

// ------------------------
// Main Form Component
// ------------------------
export default function JobApplicationForm() {
  const [step, setStep] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const totalSteps = 7;
  const progress = Math.round(((step + 1) / totalSteps) * 100);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Final Data:", data);
    alert("Application submitted successfully!");
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const isDarkMode = watch("darkMode", false);

  // Next button handler that validates current step's fields (if defined)
  const handleNext = async () => {
    if (stepFieldNames.hasOwnProperty(step)) {
      const valid = await trigger(stepFieldNames[step]);
      if (valid) {
        setStep(step + 1);
      }
    } else {
      setStep(step + 1);
    }
  };

  if (!isClient) {
    return null;
  }

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
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`h-2 w-10 rounded-full transition-all duration-300 ${
                  step >= i ? "bg-black dark:bg-white" : "bg-gray-200 dark:bg-gray-700"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex items-center ml-4">
            <Controller
              control={control}
              name="darkMode"
              defaultValue={false}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="relative w-12 h-6 rounded-full transition data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-300"
                >
                  <span
                    className="absolute left-1 top-1 w-4 h-4 rounded-full transition-all data-[state=checked]:translate-x-6 bg-white dark:bg-gray-800 border border-gray-500 dark:border-gray-300"
                  ></span>
                </Switch>
              )}
            />
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
            <Card className="w-full bg-white dark:bg-neutral-800 shadow-lg rounded-xl border border-gray-200 dark:border-neutral-700">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  {getStepTitle(step)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Wrap the step content inside a form element */}
                <form onSubmit={handleSubmit(onSubmit)} id="job-application-form">
                  {renderStepContent(step, register, errors, setValue, control)}
                  <div className="flex justify-between mt-6">
                    {step > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        className="text-sm font-medium inline-flex items-center justify-center border border-transparent tracking-normal transition px-2 py-1 bg-white text-black hover:bg-gray-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 rounded-lg"
                        onClick={() => setStep(step - 1)}
                      >
                        Back
                      </Button>
                    )}
                    {step < totalSteps - 1 ? (
                      <Button
                        type="button"
                        className="text-sm font-medium inline-flex items-center justify-center border border-transparent tracking-normal transition px-2 py-1 bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-lg"
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-lg tracking-normal transition px-2 py-1 bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
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

// ------------------------
// Helper Functions
// ------------------------
function getStepTitle(step: number): string {
  const titles = [
    "",
    "Personal Information",
    "Position & Experience",
    "Almost Done",
    "Portfolio & CV Upload",
    "Additional Information",
    "Review & Submit",
  ];
  return titles[step];
}

function renderStepContent(
  step: number,
  register: any,
  errors: any,
  setValue: any,
  control: any
) {
  switch (step) {
    case 0:
      return (
        <div className="text-center">
          <img
            src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif"
            alt="Welcome"
            className="w-54 mx-auto mb-4"
          />
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We're thrilled that you're considering applying. Get ready for an exciting journey!
          </p>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">
              Full Name
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
              Phone Number (Optional)
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="position" className="text-gray-700 dark:text-gray-300">
              Position Applied For 
            </Label>
            <Controller
              control={control}
              name="position"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frontend Developer">Game Developer</SelectItem>
                    <SelectItem value="Backend Developer">Backend Developer</SelectItem>
                    <SelectItem value="Fullstack Developer">Fullstack Developer</SelectItem>
                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label htmlFor="experience" className="text-gray-700 dark:text-gray-300">
              Years of Experience (Optional)
            </Label>
            <Input
              id="experience"
              type="number"
              {...register("experience")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            />
          </div>
          <div>
            <Label htmlFor="skills" className="text-gray-700 dark:text-gray-300">
              Skills (Optional)
            </Label>
            <Input
              id="skills"
              {...register("skills")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="text-center">
          <img
            src="https://media.giphy.com/media/xUPJPes93VYAtALFxS/giphy.gif?cid=ecf05e47n5y1b6u3rj0te2tpvrjyy92w4l4w6epyzfj2z2db&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Almost Done"
            className="w-54 mx-auto mb-4"
          />
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            You're almost there! Keep up the great work and get ready to shine.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="portfolio" className="text-gray-700 dark:text-gray-300">
              Portfolio URL (Optional)
            </Label>
            <Input
              id="portfolio"
              type="url"
              {...register("portfolio")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            />
          </div>
          <div>
            <Label htmlFor="cv" className="text-gray-700 dark:text-gray-300">
              Upload CV (PDF or DOC, max 2MB)
            </Label>
            <input
              id="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setValue("cv", e.target.files)}
              className="mt-1 w-full"
            />
            {errors.cv && (
              <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>
            )}
          </div>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div>
            <Label htmlFor="motivation" className="text-gray-700 dark:text-gray-300">
              Motivation (Optional)
            </Label>
            <textarea
              id="motivation"
              {...register("motivation")}
              className="mt-1 w-full bg-white border border-zinc-200 focus:border-black focus:ring-1 focus:ring-black shadow rounded text-zinc-600 text-sm px-4 py-2 placeholder-zinc-400 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-zinc-500"
            ></textarea>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Review Your Application</h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Please review all the details before submitting your application.
          </p>
          {/* Optionally, display a summary of the entered data here */}
        </div>
      );
    default:
      return null;
  }
}
