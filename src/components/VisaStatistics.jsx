import React from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

const VisaStatistics = () => {
  const stats = [
    { label: "Visas Processed", value: 1200, suffix: "+" },
    { label: "Countries Served", value: 50, suffix: "+" },
    { label: "Fastest Processing Time", value: 24, suffix: "h" },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-xl text-[#F14836] uppercase text-center font-bold mb-4">visa statistics</h1>
      <p className="text-3xl mb-6 font-semibold text-center ">Global Visa Insights</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <Fade key={index} triggerOnce>
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-4xl font-bold text-[#F14836]">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={4}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-[#404040] mt-2">{stat.label}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default VisaStatistics;