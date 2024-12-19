import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestVisas = () => {
  const [latestVisas, setLatestVisas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://visa-navigate-server-five.vercel.app/visa")
      .then((res) => res.json())
      .then((data) => setLatestVisas(data))
      .catch((error) => console.error("Error fetching latest visas:", error));
  }, []);

  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };

  const handleSeeAllVisas = () => {
    navigate("/all-visas");
  };

  return (
    <section>
      <h2 className="text-xl text-[#F14836] uppercase text-center font-bold mb-6">Latest Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestVisas.slice(0, 6).map((visa) => ( 
          <div
            key={visa._id}
            className="border rounded-lg shadow-md p-2 bg-white"
          >
            <img
              src={visa.countryImage}
              alt={visa.countryName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="text-lg font-bold">{visa.countryName}</h3>
              <p>Visa Type: {visa.visaType}</p>
              <p>Processing Time: {visa.processingTime} days</p>
              <p>Fee: ${visa.fee}</p>
              <p>Validity: {visa.validity}</p>
              <p>Application Method: {visa.applicationMethod}</p>
              <button
                onClick={() => handleSeeDetails(visa._id)}
                className="btn mt-2 btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-2">
        <button
          onClick={handleSeeAllVisas}
          className="btn mt-2 btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
          See All Visas
        </button>
      </div>
    </section>
  );
};

export default LatestVisas;
