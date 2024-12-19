import React from "react";
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee
  } = visa;
  return (
    <div className="mb-6">
      <div
        key={visa.id}
        className="border rounded-lg overflow-hidden shadow-md bg-white p-2"
      >
        <img
          src={countryImage}
          alt={countryImage}
          className="w-full h-48 object-cover"
        />
        <div className="p-2 border-t">
          <h3 className="font-bold text-lg mb-2">{countryName}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-[#404040]">
            <div>
              <span className="font-semibold">Type:</span> {visaType}
            </div>
            <div>
              <span className="font-semibold">Fee:</span> {fee}$
            </div>
            <div>
              <span className="font-semibold">Processing:</span> {processingTime}{" "}
              day
            </div>
           
          </div>
          <Link to={`/visa-details/${visa._id}`}>
            <button className="btn mt-4 btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;