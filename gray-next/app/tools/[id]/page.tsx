"use client";

import { tools } from "@/app/tools/data/tools";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = tools.find((t) => t.id === params.id);

  if (!tool) {
    notFound();
  }

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === tool.media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? tool.media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden mb-8"
        >
          <div className="relative h-96">
            <Image
              src={tool.thumbnail || "/placeholder.svg"}
              alt={tool.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 hover:opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white text-center">
                {tool.title}
              </h1>
            </div>
          </div>
          <div className="p-6">
            <p className="text-lg text-gray-300">{tool.description}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 shadow-2xl rounded-lg p-6 mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Media Gallery</h2>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              {tool.media[currentMediaIndex].type === "image" ? (
                <Image
                  src={tool.media[currentMediaIndex].url || "/placeholder.svg"}
                  alt={`${tool.title} - Media ${currentMediaIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              ) : (
                <video
                  controls
                  className="w-full h-full rounded-lg"
                  poster={tool.thumbnail}
                >
                  <source
                    src={tool.media[currentMediaIndex].url}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2"
              onClick={prevMedia}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={nextMedia}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center mt-4">
            {tool.media.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentMediaIndex ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => setCurrentMediaIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Technical Details</TabsTrigger>
              <TabsTrigger value="usecases">Use Cases</TabsTrigger>
              <TabsTrigger value="insights">Development Insights</TabsTrigger>
            </TabsList>
            <TabsContent
              value="details"
              className="bg-gray-800 rounded-lg p-6 mt-4"
            >
              <h3 className="text-2xl font-bold mb-4">Technical Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
                  <ul className="space-y-2">
                    {tool.technicalDetails.stack.map((tech) => (
                      <li key={tech} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Features</h4>
                  <ul className="space-y-2">
                    {tool.technicalDetails.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="usecases"
              className="bg-gray-800 rounded-lg p-6 mt-4"
            >
              <h3 className="text-2xl font-bold mb-4">Use Cases</h3>
              <ul className="space-y-2">
                {tool.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent
              value="insights"
              className="bg-gray-800 rounded-lg p-6 mt-4"
            >
              <h3 className="text-2xl font-bold mb-4">Development Insights</h3>
              <ul className="space-y-2">
                {tool.developmentInsights.map((insight) => (
                  <li key={insight} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {insight}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
