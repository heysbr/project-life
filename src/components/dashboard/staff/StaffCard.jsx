import Image from "next/image";
import { useState } from "react";
import Profile from "@/components/svg/staff-card-profile.svg";
import Call from "@/components/svg/staff-list-call-button.svg";
import Menu from "@/components/svg/staff-card-menu.svg";
import Link from "next/link";

export default function StaffCard({ staff, handleRemove }) {
  const [toggle, setToggle] = useState(false);
  const active = staff?.active ?? false;
  return (
    <div
      key={staff.id}
      className={`relative max-w-md rounded-2xl shadow-md bg-white overflow-hidden ${
        active ? "opacity-100" : "opacity-50"
      } transition-all duration-300 `}
    >
      {/* Card Head */}
      <div className="relative h-20 bg-pink-100 px-4 py-3 flex items-center justify-between">
        <Image src={Profile} alt="profile" />
        <div className="flex-1 mx-5">
          <h2 className="text-lg font-bold">{staff.name || "N/A"}</h2>
          <p className="text-sm text-gray-500">ID- {staff.id || "N/A"}</p>
          <Image
            src={Call}
            className="absolute right-3 bottom-2.5"
            alt="call"
          />
          <Image
            src={Menu}
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={() => setToggle(!toggle)}
            alt="menu"
          />

          {/* Edit Menu */}
          {toggle && (
            <div
              className="absolute flex list-disc list-inside w-1/2 top-9 right-2 text-sm bg-white shadow-lg rounded-md p-4 z-10 transition-all duration-500"
              onClick={() => setToggle(!toggle)}
            >
              <ul className="list-disc marker:text-[#FC5285] list-outside ml-5">
                <Link href={`/dashboard/staff/`}>
                  <li className="p-1 rounded-md hover:bg-gray-100 cursor-pointer">
                    Edit Staff
                  </li>
                </Link>
                <li className="p-1 rounded  hover:bg-gray-100 cursor-pointer">
                  Make an admin
                </li>
                <li
                  className="p-1 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleRemove(staff.id)}
                >
                  Remove from institution
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Card Body */}
      <table className="m-5">
        <tbody>
          <tr>
            <td className="h-8 w-3/7">Email</td>
            <td className="text-[#7D8491]">{staff.email || "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Phone No.</td>
            <td className="text-[#7D8491]">{staff.phoneNo || "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Profession</td>
            <td className="text-[#7D8491]">{staff.profession || "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Total Patient</td>
            <td className="text-[#7D8491]">{staff.totalPatient ?? "N/A"}</td>
          </tr>
          <tr>
            <td className="h-8 w-3/7">Initials</td>
            <td className="text-[#7D8491]">{staff.initials || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      <span
        className={`absolute bottom-3 font-semibold right-6 ${
          active ? "text-[#2DB23B]" : "text-[#ABAFB7]"
        }`}
      >
        &#8226;{active ? "  On Duty" : "  Off Duty"}
      </span>
    </div>
  );
}
