import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);
  useEffect(() => {
    fetch(`https://visa-navigate-server-five.vercel.app/visa?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVisas(data))
      .catch((error) => console.error("Error fetching visas:", error));
  }, [user.email]);

  const handleDelete = (id) => {
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
        fetch(`https://visa-navigate-server-five.vercel.app/visa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your visa has been deleted.", "success");
              setVisas(visas.filter((visa) => visa._id !== id));
            }
          })
          .catch((error) => console.error("Error deleting visa:", error));
      }
    });
  };

  const handleUpdate = (id) => {
    const visaToUpdate = visas.find((visa) => visa._id === id);
    setSelectedVisa(visaToUpdate);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`https://visa-navigate-server-five.vercel.app/visa/${selectedVisa._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedVisa),
    })
      .then((res) => res.json())
      .then(() => {
        setVisas(
          visas.map((visa) =>
            visa._id === selectedVisa._id ? selectedVisa : visa
          )
        );
        setSelectedVisa(null);
        Swal.fire("Updated!", "Visa details updated successfully.", "success");
      })
      .catch((error) => console.error("Error updating visa:", error));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5 ">
      {visas.map((visa) => (
        <div
          key={visa._id}
          className="border rounded-lg shadow-md p-4 bg-white"
        >
          <img
            src={visa.countryImage}
            alt={visa.country}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-2">
            <h3 className="text-lg font-bold">{visa.countryName}</h3>
            <p>
              <span className="font-semibold">Visa type:</span> {visa.visaType}
            </p>
            <p>
              <span className="font-semibold">Processing Time: </span>
              {visa.processingTime} days
            </p>
            <p>
              <span className="font-semibold">Fee:</span> ${visa.fee}
            </p>
            <p>
              <span className="font-semibold">Validity: </span>
              {visa.validity}
            </p>
            <p>
              <span className="font-semibold">Application Method:</span>{" "}
              {visa.applicationMethod}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleUpdate(visa._id)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(visa._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedVisa && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-bold mb-4">Update Visa</h3>
            <input
              type="text"
              value={selectedVisa.countryName}
              onChange={(e) =>
                setSelectedVisa({
                  ...selectedVisa,
                  countryName: e.target.value,
                })
              }
              className="w-full mb-2 p-2 border rounded"
              placeholder="Country"
            />
            <input
              type="text"
              value={selectedVisa.visaType}
              onChange={(e) =>
                setSelectedVisa({ ...selectedVisa, visaType: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
              placeholder="Visa Type"
            />
            <input
              type="number"
              value={selectedVisa.processingTime}
              onChange={(e) =>
                setSelectedVisa({
                  ...selectedVisa,
                  processingTime: e.target.value,
                })
              }
              className="w-full mb-2 p-2 border rounded"
              placeholder="Processing Time"
            />
            <input
              type="number"
              value={selectedVisa.fee}
              onChange={(e) =>
                setSelectedVisa({ ...selectedVisa, fee: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
              placeholder="Fee"
            />
            <input
              type="text"
              value={selectedVisa.validity}
              onChange={(e) =>
                setSelectedVisa({ ...selectedVisa, validity: e.target.value })
              }
              className="w-full mb-2 p-2 border rounded"
              placeholder="Validity"
            />
            <input
              type="text"
              value={selectedVisa.applicationMethod}
              onChange={(e) =>
                setSelectedVisa({
                  ...selectedVisa,
                  applicationMethod: e.target.value,
                })
              }
              className="w-full mb-2 p-2 border rounded"
              placeholder="Application Method"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setSelectedVisa(null)}
              className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
