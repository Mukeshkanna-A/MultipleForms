import React, { useState } from 'react';
import FirstForm from "./FormComponents/FirstForm";
import SecondForm from "./FormComponents/SecondForm";
import ThirdForm from "./FormComponents/ThirdForm";
import axios from 'axios';


const ParentComponent = () => {

  const formList = ["First Form", "Second Form", "Third Form"];
  const [page, setPage] = useState(0);
  const [checked , setChecked] = useState(false);
  const formLength = formList.length;
  const [ formData , setFormData ] = useState ({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    pincode: "",
    gender: "",
    course: "",
    terms: false
  })
  

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };

  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  // console.log(page);

  const handleForm = () => {
    switch (page) {
      case 0: {
        return <FirstForm formData={formData} setFormData={setFormData}></FirstForm>;
      }
      case 1: {
        return <SecondForm formData={formData} setFormData={setFormData}></SecondForm>;
      }
      case 2: {
        return <ThirdForm formData={formData} setFormData={setFormData} checked={checked} setChecked={setChecked}></ThirdForm>;
      }
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await setTimeout(() => {
        alert("Form submitted");
        axios.post("https://6517db21582f58d62d352ad5.mockapi.io/api",{formData})
        .then((response) => {
          console.log("response",response)
        }).catch((error) => {
          console.log("error occured",error)
        });
        console.log("form",formData);
    }, 1000);
    return response;
  }

  return (
    <div className="grid gap-4 place-content-center items-center h-screen place-items-center">

    <div>{handleForm()}</div>

    <div className="flex justify-between items-center">
      <div className="grid grid-cols-2 gap-4 place-content-center"> 
        <button onClick={handlePrev} disabled={ page === 0 } className="bg-blue-200 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400">Prev</button>
      </div>
      {page === 2 ? (
        <div>
            <button onClick={handleSubmit} className="bg-blue-200 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer">Submit</button>
        </div>
      ) : (
        <div>
             <button onClick={handleNext} className="bg-blue-200 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-md cursor-pointer">Next</button>
        </div>
      )}
      
    </div>

      {/* Page footer  */}

      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Form Stepper. All rights reserved.
      </p>
    </div>
  );
};

export default ParentComponent;
