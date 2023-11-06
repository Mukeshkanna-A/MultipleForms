import React from "react";

const SecondForm = ({ formData, setFormData }) => {
  return (
    <div className="w-full max-w-sm">
      <form className="shadow-md bg-white px-20 pt-16 pb-10 mb-8 rounded-2xl">
        <div className="grid gap-4 place-content-center items-center">
          {/* Page Heading */}
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">
            Student Info
          </h1>
        </div>

        {/* Phone Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="Phone"
            for="personPhone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="personPhone"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Address Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="address"
            for="personAddress"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <textarea
            id="personAddress"
            name="address"
            rows="4"
            cols="24"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* PIN Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="pin"
            for="personPin"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            PIN
          </label>
          <input
            type="text"
            id="personPin"
            value={formData.pin}
            onChange={(e) => setFormData({...formData, pin: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
      </form>
    </div>
  );
};

export default SecondForm;
