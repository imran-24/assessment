"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  CheckSquare,
  ChevronRight,
  ChevronsUpDown,
  Clipboard,
  Edit2,
  File,
  Filter,
  Folder,
  LucideIcon,
  MoreHorizontal,
  PlusCircle,
  Search,
  Text,
  Trash2,
} from "lucide-react";

import { MaterialItem } from "./Materialtem";
import Access from "./Dropdown/Access";
import Actions from "./Dropdown/Actions";

export const icons = [Folder, File, Folder, Text, Clipboard];
export const options = ["Content", "Course Details", "Revision"];
const MaterialActions = () => (
  <div className='flex items-center'>
    <Button variant={"ghost"} size={"icon"}>
      <MoreHorizontal className='text-muted-foreground' />
    </Button>
    <Button variant={"ghost"} size={"icon"}>
      <Edit2 className='text-muted-foreground' />
    </Button>
    <Button variant={"ghost"} size={"icon"}>
      <Trash2 className='text-muted-foreground' />
    </Button>
    <Button variant={"ghost"} size={"icon"}>
      <ChevronsUpDown className='text-muted-foreground' />
    </Button>
    <Button variant={"ghost"} size={"icon"}>
      <Filter className='text-muted-foreground' />
    </Button>
  </div>
);

const CourseContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className='bg-white '>
      <div className='border-b border-gray-200'>
        <div className='flex items-center'>
          <nav className='pl-4 flex-1'>
            <ul className='flex'>
              {options.map((option: string, index: number) => (
                <li key={index}>
                  <button
                    className={`px-2 py-4 text-sm lg:text-base ${
                      selected === option &&
                      "text-gray-800 border-b-2 border-black font-medium"
                    } `}
                  >
                    {option}
                  </button>
                </li>
              ))}

              <li className='px-4 flex items-center'>
                <Button variant={"ghost"}>
                  <PlusCircle className='fill-black text-white size-5' />
                  <span>Add main Folder</span>
                </Button>
              </li>
            </ul>
          </nav>

          <div className='px-4 py-3 hidden  lg:flex items-center gap-3'>
            <div className='relative flex items-center border border-gray-300 rounded px-2'>
              <Search className='text-muted-foreground mr-2 size-4' />
              <input
                type='text'
                placeholder='Search...'
                className='border-none focus-visible:outline-0 outline-0 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 py-1 text-sm w-44'
              />
            </div>
            <MaterialActions />
          </div>
        </div>
      </div>

      <div className='py-3 px-4 flex items-center border-b border-gray-200'>
        <Button
          size={"icon"}
          className='size-6 p-1 bg-black flex items-center justify-center rounded-full'
        >
          <ArrowLeft className='text-white' />
        </Button>

        <Button variant={"ghost"}>
          <span className='font-medium'>Chapter 1</span>
          <ChevronRight />
        </Button>

        <Button variant={"ghost"}>
          <span className='font-medium'>Chapter 1.1</span>
          <ChevronRight />
        </Button>

        <Button variant={"outline"} className='ml-2'>
          <CheckSquare />
          <span className='font-medium'>Chapter 1</span>
        </Button>

        <div className='ml-auto flex items-center gap-1 text-sm text-gray-600'>
          <div className='hidden lg:flex items-center gap-1 text-sm text-gray-600'>
            <Access />
            <Actions />
          </div>
        </div>
      </div>

      <div className='divide-y divide-gray-100'>
        <MaterialItem
          type='folder'
          title='Chapter 1.1'
          isFolder
          isExpanded
          details={{
            createdOn: "25/02/2025 10:35 pm",
            createdBy: "Sir",
            lastModified: "Friday, 25/02/2025, 10:35 pm",
            lastModifiedBy: "Sir",
            kind: "PDF Document",
            size: "23 MB",
            visibleTo:
              "Batch 1, Batch 2, Batch 3. For both online & physical students",
          }}
        />

        <MaterialItem type='file' title='Chapter 2 revision notes.pdf' />
      </div>

      <div className='p-4 grid grid-cols-5 gap-2'>
        {icons.map((Icon: LucideIcon, index: number) => (
          <Button
            key={index}
            variant='ghost'
            className='border h-14 lg:h-20 border-gray-300 border-dashed rounded p-2 flex flex-col lg:flex-row items-center justify-center hover:bg-gray-50'
          >
            <Icon className='w-6 h-6' /> {/* Correct way to render the icon */}
            <span className='text-xs lg:text-sm font-medium'>Add Folder</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
