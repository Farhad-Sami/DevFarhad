"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Develop custom bots, scripts to automate your daily job",
      image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/243465400/original/6cc64796d1c15f6819c7d2e0edd51386a8a0af85/develop-custom-bots-scripts-to-automate-your-daily-job.png",
      rating: 5,
      reviewCount: 9,
      price: 100,
      reviewLink:
        "https://go.fiverr.com/visit/?bta=386773&brand=fiverrmarketplace&utm_campaign=gig_ads&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fs%252FNN2epZZ",
    },
    {
      id: 2,
      title: "Robotize your google sheets and API",
      image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/299764018/original/7f7f5ab2c2307f966041c8f31ea5d089bef4a559/robotize-your-google-sheets-and-api.png",
      rating: 5,
      reviewCount: 4,
      price: 50,
      reviewLink:
        "https://go.fiverr.com/visit/?bta=386773&brand=fiverrmarketplace&utm_campaign=gig_ads&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fs%252FQ7X2DWe",
    },
  ];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="absolute top-20 sm:top-30 left-0 right-0 bg-background text-foreground px-4 lg:px-6 rounded-xl">
      <h1 className="text-2xl font-semibold mb-6 text-center">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col border-4 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
          >
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="relative h-80 w-full cursor-zoom-in"
                  onClick={() => setSelectedImage(service.image)}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[90vw] lg:max-w-7xl h-auto p-4">
                <DialogTitle className="mb-4 text-xl text-center">
                  Expanded View
                </DialogTitle>
                <div className="relative w-full h-[70vh]">
                  {selectedImage && (
                    <Image
                      src={selectedImage}
                      alt="Expanded view"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <Link
                  href={service.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-xl text-center font-bold mb-2 hover:animate-pulse cursor-pointer transition-colors">
                    {service.title}
                  </h2>
                </Link>
                <div className="flex items-center justify-center mb-1">
                  <div className="text-yellow-400 mr-2">
                    {"★".repeat(Math.floor(service.rating))}
                    {service.rating % 1 >= 0.5 ? "½" : ""}
                  </div>
                  <span className="text-sm">
                    ({service.reviewCount} reviews)
                  </span>
                </div>
                <p className="text-sm text-center">
                  Starting from {" "}
                  <span className="font-semibold">${service.price}</span>
                </p>
              </div>
              <div className="pt-4 mx-auto">
                <Link
                  href={service.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-center hover:bg-foreground hover:text-background rounded-md px-4 py-2"
                >
                  Check my clients’ reviews →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
