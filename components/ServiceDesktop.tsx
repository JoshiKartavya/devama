import React, { useEffect, useState } from "react";
import { getServices } from "@/sanity/sanity-utils"; // Import the Sanity fetch function
import "./ServicesDesktop.scss";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

// Define the TypeScript interface for services
interface Service {
  _id: string;
  price: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceDesktop = () => {
  const [services, setServices] = useState<Service[]>([]);

  // Fetch services data from Sanity on component mount
  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices(); // Call the Sanity fetch function
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchServices();
  }, []);

  return (
    <div>
      <div
        id="services"
        className="flex flex-col justify-start items-center w-[100vw] h-max xl:h-[100vh] xl:px-12 xl:py-10 gap-12"
      >
        <div className="services w-full h-full xl:h-[80vh] xl:px-12 xl:py-10 flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-0">
          {services.map((service) => (
            <div
              key={service._id}
              className="service ser1 w-[90%] lg:w-[90%] xl:w-[30%] h-[70vh] lg:h-[85vh] xl:h-[70vh] rounded-2xl border-slate-800 border-2 border-b-0 flex flex-col lg:flex-col xl:flex-col justify-start items-center gap-8 lg:gap-0 xl:gap-0 px-8 py-6"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="content w-full h-full flex flex-col gap-6 justify-start items-start">
                <h3 className="text-[#d9d9d9] text-sm xl:text-lg border-[1px] rounded-xl border-[#d9d9d9] px-3 xl:px-6 py-2 xl:py-4">
                  ${service.price}
                  <span className="text-2xl">+</span>
                </h3>
                <h1 className="text-3xl xl:text-5xl font-semibold">
                  {service.title}
                </h1>
                <p className="text-[#d9d9d9] text-sm xl:text-lg">
                  {service.description}
                </p>
                <div className="features w-full flex flex-col gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#d9d9d9] rounded-full"></div>
                      <p className="text-[#d9d9d9] text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="Read more"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDesktop;
