import React from "react";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  CheckSquare,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  ChevronUp,
  Clipboard,
  Edit2,
  Eye,
  File,
  Filter,
  Folder,
  MoreHorizontal,
  PlusCircle,
  Search,
  Text,
  Trash2,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Checkbox } from "./ui/checkbox";

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

const MaterialItem = ({
  type,
  title,
  isFolder = false,
  isExpanded = false,
  details = null,
}: {
  type: "folder" | "file";
  title: string;
  isFolder?: boolean;
  isExpanded?: boolean;
  details?: {
    createdOn?: string;
    createdBy?: string;
    lastModified?: string;
    lastModifiedBy?: string;
    kind?: string;
    size?: string;
    visibleTo?: string;
  } | null;
}) => {
  return (
    <div className='grid grid-cols-2 items-start gap-4 p-6 border-b border-gray-200'>
      <div className="flex items-start flex-col lg:flex-row lg:items-center gap-2">
        <div className='flex items-center'>
          <div className='w-6'>
            <Checkbox />
          </div>
          {type === "folder" ? (
            <div className='mr-2 text-gray-600'>
              <Folder />
            </div>
          ) : (
            <div className='mr-2 text-gray-600'>
              <File />
            </div>
          )}

          <div className='flex items-center'>
            <span className='font-medium'>{title}</span>
            {isFolder && (
              <span className='ml-2'>
                {isExpanded ? <ChevronUp /> : <ChevronDown />}
              </span>
            )}
          </div>
        </div>

        <div className='ml-auto flex items-center gap-4'>
          {details ? (
            <div className='mr-4 text-gray-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10' />
                <path d='M12 16v-4' />
                <path d='M12 8h.01' />
              </svg>
            </div>
          ) : null}

          <div className='flex items-center gap-1 text-sm text-gray-600'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className='flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded'
                >
                  <Eye />
                  <span>Access to</span>
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56 bg-white'>
                <DropdownMenuLabel>User Access</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Students Only</DropdownMenuItem>
                <DropdownMenuItem>Teachers Only</DropdownMenuItem>
                <DropdownMenuItem>All Batches</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Selected Batches</DropdownMenuItem>
                <DropdownMenuItem>Custom Access</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className='flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded'
                >
                  <span>Actions</span>
                  <ChevronDown className='h-3.5 w-3.5' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-48 bg-white'>
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='text-red-600'>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {details && (
        <div className='border-l pl-4'>
          <div className='bg-gray-50 rounded'>
            <div className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm'>
              <div>
                <p className='font-medium'>
                  Created on:{" "}
                  <span className='font-normal'>{details.createdOn}</span>
                </p>
                <p className='font-medium'>
                  Created by:{" "}
                  <span className='font-normal'>{details.createdBy}</span>
                </p>
                <p className='font-medium'>
                  Last Modified:{" "}
                  <span className='font-normal'>{details.lastModified}</span>
                </p>
                <p className='font-medium'>
                  Last Modified by:{" "}
                  <span className='font-normal'>{details.lastModifiedBy}</span>
                </p>
              </div>
              <div>
                <p className='font-medium'>
                  Kind: <span className='font-normal'>{details.kind}</span>
                </p>
                <p className='font-medium'>
                  Size: <span className='font-normal'>{details.size}</span>
                </p>
              </div>
              <div className='col-span-2 mt-2'>
                <p className='font-medium italic'>
                  Visible to:{" "}
                  <span className='font-normal'>{details.visibleTo}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CourseContent = () => {
  return (
    <div className='bg-white '>
      <div className='border-b border-gray-200'>
        <div className='flex items-center'>
          <nav className='pl-4 flex-1'>
            <ul className='flex'>
              <li>
                <button className='px-2 py-4 text-sm lg:text-base text-gray-800 border-b-2 border-black font-medium'>
                  Content
                </button>
              </li>
              <li>
                <button className='px-2 py-4 text-sm lg:text-base text-gray-600 hover:text-gray-800'>
                  Course Details
                </button>
              </li>
              <li>
                <button className='px-2 py-4 text-sm lg:text-base text-gray-600 hover:text-gray-800'>
                  Revision
                </button>
              </li>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className='flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded'
                >
                  <Eye className='h-4 w-4' />
                  <span>Access to</span>
                  <ChevronDown className='h-3.5 w-3.5' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56 bg-white'>
                <DropdownMenuLabel>User Access</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Students Only</DropdownMenuItem>
                <DropdownMenuItem>Teachers Only</DropdownMenuItem>
                <DropdownMenuItem>All Batches</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Selected Batches</DropdownMenuItem>
                <DropdownMenuItem>Custom Access</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"secondary"}
                  className='flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded'
                >
                  <span>Actions</span>
                  <ChevronDown className='h-3.5 w-3.5' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-48 bg-white'>
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Download</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='text-red-600'>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
        <Button
          variant={"ghost"}
          className='border h-14 lg:h-20  border-gray-300 border-dashed rounded p-2 flex flex-col lg:flex-row items-center justify-center  hover:bg-gray-50'
        >
          <Folder />
          <span className='text-xs lg:text-sm font-medium'>Add Folder</span>
        </Button>

        <Button
          variant={"ghost"}
          className='border h-14 lg:h-20  border-gray-300 border-dashed rounded p-2 flex flex-col lg:flex-row items-center justify-center  hover:bg-gray-50'
        >
          <File />
          <span className='text-xs lg:text-sm font-medium'>Upload File</span>
        </Button>

        <Button
          variant={"ghost"}
          className='border h-14 lg:h-20  border-gray-300 border-dashed rounded p-2 flex flex-col lg:flex-row items-center justify-center  hover:bg-gray-50'
        >
          <Folder />
          <span className='text-xs lg:text-sm font-medium'>Upload Folder</span>
        </Button>

        <Button
          variant={"ghost"}
          className='border h-14 lg:h-20  border-gray-300 border-dashed rounded p-2 flex flex-col lg:flex-row items-center justify-center  hover:bg-gray-50'
        >
          <Text />
          <span className='text-xs lg:text-sm font-medium'>Add Text</span>
        </Button>

        <Button
          variant={"ghost"}
          className='border h-14 lg:h-20  border-gray-300 border-dashed rounded p-2 flex flex-col lg:flex-row items-center justify-center  hover:bg-gray-50'
        >
          <Clipboard />
          <span className='text-xs lg:text-sm font-medium'>Paste</span>
        </Button>
      </div>
    </div>
  );
};

export default CourseContent;
