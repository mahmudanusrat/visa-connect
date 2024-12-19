import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VisaCard from "./VisaCard";

const AllVisas = () => {
  const visas = useLoaderData();

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredVisas = visas.filter((visa) => {
    return filter ? visa.visaType.toLowerCase() === filter.toLowerCase() : true;
  });

  return (
    <div>
      <div className="flex justify-center my-6">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Visa Types</option>
          <option value="Tourist Visa">Tourist Visa</option>
          <option value="Student Visa">Student Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Business Visa">Business Visa</option>
          <option value="Official Visa">Official Visa</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {filteredVisas.map((visa) => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
