import React from "react";
import {BsFillTelephoneForwardFill} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

const Form = () => {
  return (
    <div className="flex flex-col ">
      <div className=" bg-white font-semibold text-center mb-5 w-[15rem] h-[4rem] rounded-lg ">
        <p className="flex justify-center items-center h-full">Add Contact</p>
      </div>
      <div className="bg-white h-[17rem] rounded-lg ">
        <form action="" className="flex flex-col m-3  ">
          <div>
            <AiOutlineUser className="absolute ml-2 mt-2" />
            <input
              type="text"
              placeholder="Name"
              className="border w-full pl-7 border-gray-300 outline-none h-[2rem] focus:bg-yellow-200"
            />
          </div>
          <div className="relative flex items-center mt-5 ">
            <BsFillTelephoneForwardFill className="absolute ml-2" />
            <input
              type="text"
              placeholder="Phone Number"
              className="border w-full pl-7 border-gray-300 outline-none h-[2rem] focus:bg-yellow-200"
            />
          </div>

          <select
            name="Gender"
            id="Gender"
            className="mt-5 border  border-gray-300 outline-none h-[2rem]"
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
