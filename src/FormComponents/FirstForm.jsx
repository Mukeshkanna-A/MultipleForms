import React from "react";
// import axios from "axios";

const FirstForm = ({ formData , setFormData }) => {

  return (
    <div className="w-full max-w-sm">
      <form className="shadow-md bg-white px-20 pt-16 pb-10 mb-8 rounded-2xl">
        <div className="grid gap-4 place-content-center items-center">

          {/* Page Heading */}

          <h1 className="text-gray-700 pb-8 font-bold text-2xl">
            Student Info
          </h1>
        </div>

        {/* Name Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="Name"
            for="personName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="personName"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* E-mail Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="email"
            for="personEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="personEmail"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>

        {/* Password Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="password"
            for="personPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="personPassword"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
      </form>
    </div>
  );
};

export default FirstForm;
