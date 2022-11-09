import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-slate-200 w-[40rem] h-[5rem] text-center">
        <p className="flex justify-center items-center h-full font-semibold ">
          Contact
        </p>
      </div>
      <div className="mt-5 bg-slate-200 w-[40rem] flex items-center ">
        <table className="w-full">
          <tbody>
            <tr>
              {["Username", "Phone Number", "Gender", "Delete", "Edit"].map(
                (item, idx) => (
                  <td key={idx}>{item}</td>
                )
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
