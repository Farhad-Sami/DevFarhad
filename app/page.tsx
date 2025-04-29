"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/themetoggle";

export default function Page() {
  const messages = [
    {
      heading: "Full-Stack Web Developer",
      subheading: "Crafting scalable frontend & backend systems",
      description:
        "Building elegant UIs and robust APIs with modern frameworks like React, Node.js, and Express for seamless web experiences.",
    },
    {
      heading: "Automation Specialist",
      subheading: "Let your apps work while you sleep",
      description:
        "I automate workflows and create custom automation solution for your industry to boost efficiency and eliminate repetitive tasks.",
    },
    {
      heading: "Problem Solver & Engineer",
      subheading: "Turning ideas into products",
      description:
        "From planning to deployment — I bring tech solutions to life, leveraging cloud platforms and DevOps best practices.",
    },
    {
      heading: "Web Application Performance Expert",
      subheading: "Optimizing the user experience with fast loading times",
      description:
        "I improve site speed and responsiveness using modern frontend tools, API optimization, and performance monitoring tools.",
    },
    {
      heading: "API Integration & Development",
      subheading: "Building and connecting powerful APIs",
      description:
        "Specialized in building RESTful APIs, and integrating third-party services, ensuring your app has seamless data flows and connectivity.",
    },
    {
      heading: "Database Design & Management",
      subheading: "Efficiently managing data at scale",
      description:
        "I design scalable databases, optimize queries, and ensure high availability using technologies like MongoDB, PostgreSQL, and MySQL.",
    },
    {
      heading: "DevOps & Continuous Integration",
      subheading: "Automating deployment pipelines for continuous delivery",
      description:
        "I set up DevOps pipelines, CI/CD processes, and infrastructure as code using tools like Docker, Kubernetes, and Jenkins for seamless deployment.",
    },
    {
      heading: "Cloud Solutions Architect",
      subheading: "Architecting cloud-based applications",
      description:
        "Designing cloud-based solutions using AWS, Google Cloud, and Azure to create scalable, secure, and cost-effective infrastructures.",
    },
  ];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="relative w-full h-full overflow-hidden p-0 m-0 rounded-xl shadow-none border-none">
          {" "}
          {/* Background image */}{" "}
          <Image
            src="hero-backgound.jpeg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Header */}
          <header className="absolute top-0 left-0 right-0 z-20 h-16 bg-black/60 flex items-center border-b px-4 lg:px-6">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex items-center gap-2">
              <Image src="logo.svg" alt="Logo" width={25} height={25} />
              <span className="text-base font-semibold text-white">
                DevFarhad
              </span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <ModeToggle />
            </div>
          </header>
          {/* Overlay text */}
          <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-start px-10 pt-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={messages[index].heading}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h3 className="text-white text-4xl font-semibold">
                  {messages[index].heading}
                </h3>
                <h4 className="text-white text-2xl font-light">
                  {messages[index].subheading}
                </h4>
                <p className="text-white text-base opacity-80 max-w-md">
                  {messages[index].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* <div className="text-white max-w-lg space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                Welcome to my website
              </h1>
              <h2 className="text-3xl font-light">Farhad</h2>
            </div> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
