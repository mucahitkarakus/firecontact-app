import React from "react";
import {AiTwotoneEdit, AiFillDelete} from "react-icons/ai";
import {useState} from "react";

const Table = () => {
  const users = [
    {
      name: "topoğlu",
      number: 156156156,
      gender: "male",
    },
    {
      name: "topoğlu",
      number: 156156156,
      gender: "male",
    },
    {
      name: "topoğlu",
      number: 156156156,
      gender: "male",
    },
    {
      name: "topoğlu",
      number: 156156156,
      gender: "male",
    },
  ];

  const [deleteBtn, setDeleteBtn] = useState(true);
  const deleteButton = (prev) => {
    setDeleteBtn((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-slate-200 w-[40rem] h-[4rem] text-center rounded-lg">
        <h1 className="flex justify-center items-center h-full font-semibold ">
          Contact
        </h1>
      </div>
      <div className="mt-5 bg-slate-200 w-[40rem] flex items-center rounded-lg ">
        <table className="w-full h-10 text-center">
          <thead className="text-center">
            <tr>
              {["Username", "Phone Number", "Gender", "Delete", "Edit"].map(
                (item, idx) => (
                  <th className="p-3" key={idx}>
                    {item}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr className="bg-white text-center">
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.gender}</td>
                <td>
                  <AiFillDelete
                    onClick={deleteButton}
                    className="cursor-pointer"
                  />
                </td>
                <td>
                  <AiTwotoneEdit className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
