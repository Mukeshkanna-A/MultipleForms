import React from "react";

const ThirdForm = ({ formData, setFormData , checked , setChecked}) => {
  return (
    <div className="w-full max-w-sm">
      <form className="shadow-md bg-white px-20 pt-16 pb-10 mb-8 rounded-2xl">
        <div className="grid gap-4 place-content-center items-center">
          {/* Page Heading */}
          <h1 className="text-gray-700 pb-8 font-bold text-2xl">
            Student Info
          </h1>
        </div>

        {/* Course Input Field  */}

        <div className="mb-4">
          <label
            htmlFor="Course"
            for="personCourse"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Select a course
          </label>
          <select
            id="personCourse"
            value={formData["course"]}
            name='course'
            onChange={(e) => setFormData({...formData, course: e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          >
            <option value="" selected>
              Select a course
            </option>
            <option value="B.A-TAMIL">B.A TAMIL</option>
            <option value="B.A-ENGLISH">B.A ENGLISH</option>
            <option value="B.SC-MATHS">B.SC MATHS</option>
            <option value="B.SC-PHYSICS">B.SC PHYSICS</option>
            <option value="B.SC-CHEMISTRY">B.SC CHEMISTRY</option>
            <option value="B.SC-ZOOLOGY">B.SC ZOOLOGY</option>
            <option value="B.SC-BOTONY">B.SC BOTONY</option>
            <option value="B.SC-COMPUTER SCIENCE">B.SC COMPUTER SCIENCE</option>
          </select>
        </div>

        {/* Gender radio Field  */}

        <div className="mb-4">
          <label
            htmlFor="gender"
            for="personGender"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Gender
          </label>

          <div className="m-4 flex items-center">
            {/* Male  */}
            <div className="mr-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                checked={formData["gender"] === "male"}
                required
              />
              <label htmlFor="male" className="ml-2" for="male">
                Male
              </label>
            </div>

            {/* female  */}
            <div className="mr-4">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                checked={formData["gender"] === "female"}
              />
              <label htmlFor="female" className="ml-2" for="female">
                Female
              </label>
            </div>
            {/* others  */}
            <div className="mr-4">
              <input
                type="radio"
                id="others"
                name="gender"
                value="others"
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                checked={formData["gender"] === "others"}
              />
              <label htmlFor="others" className="ml-2" for="others">
                Others
              </label>
            </div>
          </div>
        </div>

        {/*  Checkbox Field  */}

        {/* <div className="mt-7">
          <label htmlFor="terms" className="flex items-center" for="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="h-3 w-3 text-blue-600"
            />
            <span className="ml-2 text-gray-700 text-sm ">
              All the given info is correct
            </span>
          </label>
        </div> */}
      </form>
    </div>
  );
};

export default ThirdForm;
