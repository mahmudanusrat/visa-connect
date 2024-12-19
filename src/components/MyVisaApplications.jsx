import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://visa-navigate-server-five.vercel.app/applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      });
  }, [user]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigate-server-five.vercel.app/applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your application has been deleted.",
                "success"
              );
              setApplications(applications.filter((app) => app._id !== id));
            }
          })
          .catch((error) =>
            console.error("Error canceling application:", error)
          );
      }
    });
  };
  const filteredApplications = applications.filter((application) =>
    application.countryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-6">
      <h1 className="text-xl text-[#F14836] uppercase text-center font-bold my-6">
        Visa Application
      </h1>
      <div className="flex mb-6 justify-center">
        <input
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-l"
        />
        <button
          className="btn px-6 bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836] rounded-r"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {filteredApplications.map((application) => (
          <div
            key={application._id}
            className="border rounded-lg shadow-md p-2 bg-white"
          >
            <img
              src={application.countryImage}
              alt={application.country}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2 my-2">
              <h3 className="text-xl font-bold my-2">{application.countryName}</h3>
              <p> <span className="font-semibold">Visa Type: </span> {application.visaType}</p>
              <p><span className="font-semibold">Processing Time: </span>{application.processingTime} days</p>
              <p><span className="font-semibold">Fee:</span>  ${application.fee}</p>
              <p><span className="font-semibold">Validity: </span> {application.validity} days</p>
              <p><span className="font-semibold">Application Method: </span> {application.applicationMethod}</p>
              <p><span className="font-semibold">Applied Date: </span> {application.appliedDate}</p>
              <p><span className="font-semibold">
                Applicant:</span>  {application.firstName} {application.lastName}
              </p>
              <p><span className="font-semibold">Email: </span> {application.email}</p>
              <button
                onClick={() => handleCancel(application._id)}
                className="btn mt-4 btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;