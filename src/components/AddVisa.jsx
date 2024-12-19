import React from "react";
import Swal from "sweetalert2";

const AddVisa = () => {
  const handleAddVisa = (event) => {
    event.preventDefault();
    const form = event.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    const newVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
    };
    // console.log(newVisa);

    fetch("https://visa-navigate-server-five.vercel.app/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Visa Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto my-6">
      <div className="text-center mb-5">
        <h1 className="text-3xl text-[#F14836] font-bold">Add Visa</h1>
      </div>
      <div className="border p-4 rounded-xl shadow-xl">
      <form onSubmit={handleAddVisa}>
        <div className="mb-4 ">
          <label htmlFor="countryImage" className="block font-medium mb-1">
            Country Image URL
          </label>
          <input
            type="text"
            id="countryImage"
            name="countryImage"
            placeholder="Enter image URL"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="countryName" className="block font-medium mb-1">
            Country Name
          </label>
          <input
            type="text"
            id="countryName"
            name="countryName"
            placeholder="Enter country name"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="visaType" className="block font-medium mb-1">
            Visa Type
          </label>
          <select
            id="visaType"
            name="visaType"
            className="w-full border p-2 rounded"
            required
          >
            <option value="" disabled>
              Select Visa Type
            </option>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
            <option value="Business visa">Business Visa</option>
            <option value="Work visa">Work Visa</option>
            
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="processingTime" className="block font-medium mb-1">
            Processing Time
          </label>
          <input
            type="text"
            id="processingTime"
            name="processingTime"
            placeholder="Enter processing time"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">
            Required Documents (Select at least 3)
          </label>
          <div>
            {[
              "Valid passport",
              "Visa application form",
              "Recent passport-sized photograph",
            ].map((doc, index) => (
              <label key={index} className="block">
                <input type="checkbox" className="mr-2" />
                {doc}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="w-full border p-2 rounded"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ageRestriction" className="block font-medium mb-1">
            Age Restriction
          </label>
          <input
            type="number"
            id="ageRestriction"
            name="ageRestriction"
            placeholder="Enter age restriction"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fee" className="block font-medium mb-1">
            Fee
          </label>
          <input
            type="number"
            id="fee"
            name="fee"
            placeholder="Enter fee amount"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="validity" className="block font-medium mb-1">
            Validity
          </label>
          <input
            type="text"
            id="validity"
            name="validity"
            placeholder="Enter validity"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="applicationMethod" className="block font-medium mb-1">
            Application Method
          </label>
          <input
            type="text"
            id="applicationMethod"
            name="applicationMethod"
            placeholder="Enter application method"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-md bg-[#F14836] text-white hover:bg-[#bb7169] hover:border-[#F14836]">
          Add Visa
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default AddVisa;
