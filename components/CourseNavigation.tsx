import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoreHorizontal, Save, Trash2 } from "lucide-react";

const CourseNavigation = () => {
  const navItems = [
    { name: "Students", path: "/students" },
    { name: "Announcements", path: "/announcements" },
    { name: "Materials", path: "/materials", active: true },
    { name: "Homework", path: "/homework" },
    { name: "Attendance", path: "/attendance" },
    { name: "Discussion", path: "/discussion" },
  ];

  return (
    <div className='border-b border-gray-200'>
      <div className='flex items-center'>
        <nav className='flex-1'>
          <ul className='flex items-center'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`block px-2 py-4 text-xs md:text-sm font-medium ${
                    item.active
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600 font-normal"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className=' px-4'>
              <Button variant={"ghost"} size={"icon"}>
                <MoreHorizontal />
              </Button>
            </div>
          </ul>
        </nav>

        <div className='px-4 flex items-center gap-3'>
          <Button variant={"ghost"} size={"icon"}>
            <Trash2 />
          </Button>

          <Button variant={"ghost"} size={"icon"}>
            <Save />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseNavigation;
