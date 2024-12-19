import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { id } = useParams();
  const [visa, setVisa] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://visa-navigate-server-five.vercel.app/visa/${id}`)
      .then((res) => res.json())
      .then((data) => setVisa(data));
  }, [id]);

  const handleApplicationSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = new Date().toISOString().split("T")[0];
    const applicationData = {
      countryImage: visa.countryImage,
      email: user.email,
      firstName,
      lastName,
      appliedDate,
      fee: visa.fee,
      visaId: id,
      countryName: visa.countryName,
      visaType: visa.visaType,
      validity: visa.validity,
      processingTime: visa.processingTime,
      applicationMethod: visa.applicationMethod,
    };

    fetch("https://visa-navigate-server-five.vercel.app/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Applied!", "Visa application added successfully.", "success");
        setShowModal(false);
      })
      .catch((err) => console.error(err));
  };

  if (!visa) return <div>Loading...</div>;

  return (
    <div className="mx-auto w-96 my-12 shadow-xl p-3 l">
      <img
        src={visa.countryImage}
        alt={visa.countryName}
        className="w-full object-cover rounded-md"
      />
      <div className="p-4 my-3">
        <h1 className="text-2xl font-bold">{visa.countryName}</h1>
        <p> <span  className="font-semibold"> Visa Type: </span>{visa.visaType}</p>
        <p> <span  className="font-semibold">Processing Time: </span>{visa.processingTime} days</p>
        <p> <span  className="font-semibold">Fee: $</span>{visa.fee}</p>
        <p> <span  className="font-semibold">Description: </span>{visa.description}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="btn mt-4 btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
            Apply for the Visa
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl text-[#F14836] font-bold mb-4">Visa Application</h2>
            <form onSubmit={handleApplicationSubmit}>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="border p-2 w-full mb-2"
                />
              </div>
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="border p-2 w-full mb-2"
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="border p-2 w-full mb-2"
                />
              </div>
              <div>
                <label>Applied Date</label>
                <input
                  type="text"
                  value={new Date().toISOString().split("T")[0]}
                  readOnly
                  className="border p-2 w-full mb-2"
                />
              </div>
              <div>
                <label>Fee</label>
                <input
                  type="text"
                  value={`$${visa.fee}`}
                  readOnly
                  className="border p-2 w-full mb-4"
                />
              </div>
              <button
                type="submit"
                className="btn mt-4 btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
                Apply
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="ml-4 btn-md bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
