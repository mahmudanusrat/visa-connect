import React from "react";

const Contact = () => {
  return (
    <div className="my-20 border-b">
      <div className="lg:flex justify-between items-center gap-5">
        <div className="w-full lg:w-1/2 ">
          <h1 className="text-xl text-[#F14836] uppercase font-bold mb-3">
            contact Us
          </h1>
          <p className="text-3xl mb-4 font-semibold">
            Your Gateway to the World
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="card-body">
            <div className="md:flex gap-5">
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="text"
                placeholder="Message"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#F14836]">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
