import React, {useState} from "react";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

const Form = ({
  userData,
  name,
  phone,
  gender,
  setUserData,
  setName,
  setPhone,
  setGender,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      phone,
      gender,
    };
    setUserData([...userData, newUser]);
  };
  console.log(userData);
  return (
    <div className="flex flex-col  ">
      <div className=" bg-white font-semibold text-center mb-5 w-[17rem] h-[4rem] rounded-lg ">
        <p className="flex justify-center items-center h-full">Add Contact</p>
      </div>
      <div className="bg-white h-[17rem] rounded-lg ">
        <form onSubmit={handleSubmit} className="flex flex-col m-3  ">
          <div>
            <AiOutlineUser className="absolute ml-2 mt-4" />
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              className="border w-full pl-7 border-gray-300 outline-none h-[3rem]"
            />
          </div>
          <div className="relative flex items-center mt-5 ">
            <BsFillTelephoneForwardFill className="absolute ml-2" />
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              placeholder="Phone Number"
              className="border w-full pl-7 border-gray-300 outline-none h-[3rem]"
            />
          </div>

          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="mt-5  border  border-gray-300 outline-none h-[3rem]"
          >
            <option selected disabled hidden>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button className="bg-blue-300 mt-[2rem] border-none  h-10 border-black rounded-lg ">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
