"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { useInView, motion } from "motion/react";
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
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
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
              <Card className="border border-gray-800 bg-black shadow-none">
                <CardHeader className="px-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-medium text-white">
                        E-commerce Platform
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-2">
                        Modern e-commerce solution with real-time inventory
                        management and seamless checkout experience.
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
                      React
                    </Badge>
                    <Badge
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
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-800 bg-black shadow-none">
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
              </Card>
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <section className="container mx-auto px-6 py-16 max-w-4xl">
            <h2 className="text-3xl font-light text-white mb-12 text-center">
              Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-transparent hover:border-white rounded-md hover:p-10 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Vue.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Tailwind CSS
                  </Badge>
                </div>
              </div>
              <div className="border border-transparent hover:border-white rounded-md hover:p-10 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Python
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Express
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    FastAPI
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    GraphQL
                  </Badge>
                </div>
              </div>
              <div className="border border-transparent hover:border-white rounded-md hover:p-10 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-4">
                  Database & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    PostgreSQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Redis
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    AWS
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="container mx-auto px-6 py-16 max-w-4xl">
            <h2 className="text-3xl font-light text-white mb-12 text-center">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-gray-700 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-white">
                    Senior Full Stack Developer
                  </h3>
                  <span className="text-gray-400 text-sm">2022 - Present</span>
                </div>
                <p className="text-gray-400 mb-2">TechCorp Solutions</p>
                <p className="text-gray-300 leading-relaxed">
                  Led development of scalable web applications serving 100k+
                  users. Architected microservices infrastructure and mentored
                  junior developers in modern development practices.
                </p>
              </div>

              <div className="border-l-2 border-gray-700 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-white">
                    Full Stack Developer
                  </h3>
                  <span className="text-gray-400 text-sm">2020 - 2022</span>
                </div>
                <p className="text-gray-400 mb-2">StartupXYZ</p>
                <p className="text-gray-300 leading-relaxed">
                  Built and maintained multiple client projects using React,
                  Node.js, and cloud technologies. Collaborated with design
                  teams to create pixel-perfect user interfaces.
                </p>
              </div>

              <div className="border-l-2 border-gray-700 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-medium text-white">
                    Frontend Developer
                  </h3>
                  <span className="text-gray-400 text-sm">2018 - 2020</span>
                </div>
                <p className="text-gray-400 mb-2">Digital Agency Inc</p>
                <p className="text-gray-300 leading-relaxed">
                  Developed responsive websites and web applications for various
                  clients. Focused on performance optimization and cross-browser
                  compatibility.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="container mx-auto px-6 py-16 max-w-2xl">
            <h2 className="text-3xl font-light text-white mb-12 text-center">
              Get In Touch
            </h2>
            <Card className="border border-gray-800 bg-black shadow-none">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[120px] border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-200 text-black transition-colors"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="container mx-auto px-6 py-8 max-w-4xl">
            <div className="text-center text-gray-500 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Alex Johnson. All rights
                reserved.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
