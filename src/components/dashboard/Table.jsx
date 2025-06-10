import Image from "next/image";
import React from "react";
import edit from '@/components/dashboard/delete.svg';

const TableComponent = () => {
  const tableData = [
    {
      id: 1,
      hospitalName: "Apollo Hospital",
      contactNo: "9555508100",
      totalStaff: 25,
      totalPatient: 45,
      highRiskPatient: 12,
      status: "Active",
    },
    {
      id: 2,
      hospitalName: "Ease Care Clinic",
      contactNo: "8655508122",
      totalStaff: 15,
      totalPatient: 38,
      highRiskPatient: 5,
      status: "Inactive",
    },
    {
      id: 3,
      hospitalName: "FemCare OBS/GYN Clinic",
      contactNo: "9855508109",
      totalStaff: 20,
      totalPatient: 32,
      highRiskPatient: 8,
      status: "Active",
    },
    {
      id: 4,
      hospitalName: "Artemis Hospital",
      contactNo: "8655508122",
      totalStaff: 18,
      totalPatient: 20,
      highRiskPatient: 3,
      status: "Active",
    },
    {
      id: 5,
      hospitalName: "Medanta - The Medicity",
      contactNo: "9855508109",
      totalStaff: 15,
      totalPatient: 48,
      highRiskPatient: 15,
      status: "Active",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="w-fit bg-white shadow-md rounded-lg overflow-hidden">
        <table className="border-collapse ">
          <thead className="bg-[#FFCCDB]">
            <tr className="text-[#1E1E1E]">
              <th className="py-3 px-4 text-left font-medium ">S. No.</th>
              <th className="py-3 px-4 text-left font-medium ">Hospital Name</th>
              <th className="py-3 px-4 text-left font-medium ">Contact No.</th>
              <th className="py-3 px-4 text-left font-medium ">Total Staff</th>
              <th className="py-3 px-4 text-left font-medium ">Total Patient</th>
              <th className="py-3 px-4 text-left font-medium ">High Risk Patient</th>
              <th className="py-3 px-4 text-left font-medium ">Status</th>
              <th className="py-3 px-4 text-left font-medium  ">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {tableData.map((data, index) => (
              <tr key={data.id} className="border-b hover:bg-pink-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{data.hospitalName}</td>
                <td className="py-3 px-4">{data.contactNo}</td>
                <td className="py-3 px-4">{data.totalStaff} </td>
                <td className="py-3 px-4">{data.totalPatient} </td>
                <td className="py-3 px-4 text-red-500 font-bold">{data.highRiskPatient}</td>
                <td className="py-3 px-4 flex items-center">
                  {/* {data.status === "Active" ? ( */}
                    <div className="w-10 h-6 flex items-center bg-green-200 rounded-full p-1">
                      <div className="bg-green-500 h-4 w-4 rounded-full"></div>
                    </div>
                  {/* ) : (
                    <div className="w-10 h-6 flex items-center bg-gray-200 rounded-full p-1">
                      <div className="bg-gray-500 h-4 w-4 rounded-full"></div>
                    </div>
                  )} */}
                  {/* <span className="ml-2 text-gray-700">{data.status}</span> */}
                </td>
                <td className="py-3 px-4">
                    <Image src={edit} alt="edit" className="inline"/>
                    <Image src={''} alt="delete" className="inline"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center p-4 bg-[#FFCCDB]">
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            1
          </button>
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            2
          </button>
          <button className="px-3 py-1 mx-1 text-pink-600 bg-white border border-pink-300 rounded-md hover:bg-pink-200">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
