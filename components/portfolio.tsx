"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { useInView, motion } from "motion/react";
import Projoects from "@/lib/constants/projects.json";
import Techstack from "@/lib/constants/tech.json";
import Experience from "@/lib/constants/experience.json";
import Link from "next/link";
import Contactform from "./contactform";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const wordVariants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 150, damping: 10 },
  },
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};
export default function Component() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [showRest, setShowRest] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          className="text-center space-y-10"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          onAnimationComplete={() => setShowRest(true)}
        >
          <motion.h1
            className="scroll-m-20 text-center text-8xl font-extrabold tracking-tight text-balance"
            variants={containerVariants}
          >
            {"Deepak Sharma".split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h4
            className="scroll-m-20 text-xl font-semibold tracking-tight"
            variants={fadeUpVariants}
          >
            Full-stack developer crafting digital experiences with clean code
            and thoughtful design. Passionate about building products that make
            a difference.
          </motion.h4>
          <motion.div
            className="flex justify-center gap-6 pt-4"
            variants={fadeUpVariants}
          >
            <Link
              href="https://github.com/deepakshrma30"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/deepaksharma2002/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* Projects Section */}
      {showRest && (
        <>
          <motion.section
            className="container mx-auto px-6 py-16 max-w-4xl space-y-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", visualDuration: 0.75, bounce: 0.2 },
            }}
          >
            <h2 className="scroll-m-20 text-center pb-2  text-3xl font-semibold tracking-tight first:mt-0">
              My Work
            </h2>
            <div className="grid gap-8 md:gap-12">
              {Projoects?.map((project, index) => (
                <Card
                  className="border border-gray-800 bg-black shadow-none"
                  key={index + 1}
                >
                  <CardHeader className="px-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-medium text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 mt-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="px-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                        >
                          {tech}
                        </Badge>
                      ))}

                      {/* <Badge
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                      >
                        Node.js
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                      >
                        PostgreSQL
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                      >
                        Stripe
                      </Badge> */}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* <Card className="border border-gray-800 bg-black shadow-none">
                <CardHeader className="px-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium text-white">
                        Task Management App
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        Collaborative project management tool with real-time
                        updates and team communication features.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="px-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      Prisma
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      Socket.io
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-black shadow-none">
                <CardHeader className="px-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium text-white">
                        Analytics Dashboard
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        Data visualization platform for business intelligence
                        with interactive charts and reports.
                      </CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="px-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      Vue.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      FastAPI
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                    >
                      D3.js
                    </Badge>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <section className="container mx-auto px-6 py-16 max-w-4xl">
            <h2 className="text-3xl font-light text-white mb-12 text-center">
              Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Techstack?.map((tech, index) => (
                <div
                  key={index + 5}
                  className="border border-transparent hover:border-white rounded-md hover:p-10 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-white mb-4">
                    {tech.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.tech?.map((t, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="container mx-auto px-6 py-16 max-w-4xl">
            <h2 className="text-3xl font-light text-white mb-12 text-center">
              Experience
            </h2>
            <div className="space-y-8">
              {Experience?.map((exp, index) => (
                <div
                  className="border-l-2 border-gray-700 pl-6"
                  key={index + 100}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium text-white">
                      {exp.role}
                    </h3>
                    <span className="text-gray-400 text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.responsibilities.map((resp, i) => (
                      <span key={i}>
                        {resp}
                        {i < exp.responsibilities.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}

          <Contactform />

          {/* Footer */}
          <footer className="container mx-auto px-6 py-8 max-w-4xl">
            <div className="text-center text-gray-500 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Deepak Sharma. All rights
                reserved.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
