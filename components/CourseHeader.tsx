"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { ClipboardSignatureIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const CourseHeader = () => {
  const [selectedCourse, setSelectedCourse] = useState("Chemistry");
  const [selectedBatch, setSelectedBatch] = useState("All Batches");

  return (
    <div className='px-4 py-3 border-b border-gray-200 w-full bg-white'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-between gap-2'>
          <div className='relative '>
            <Select
              defaultValue={selectedCourse}
              onValueChange={setSelectedCourse}
            >
              <SelectTrigger className='border border-gray-300 bg-white text-gray-800 h-9'>
                <SelectValue placeholder='Select Course'>
                  Course for {selectedCourse}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Chemistry'>Chemistry</SelectItem>
                <SelectItem value='Physics'>Physics</SelectItem>
                <SelectItem value='Biology'>Biology</SelectItem>
                <SelectItem value='Mathematics'>Mathematics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='h-8 border-l border-gray-300'></div>

          <div className='relative '>
            <Select
              defaultValue={selectedBatch}
              onValueChange={setSelectedBatch}
            >
              <SelectTrigger className='border border-gray-300 bg-white text-gray-800 h-9'>
                <SelectValue placeholder='Select Batch'>
                  {selectedBatch}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='All Batches'>All Batches</SelectItem>
                <SelectItem value='Batch A'>Batch A</SelectItem>
                <SelectItem value='Batch B'>Batch B</SelectItem>
                <SelectItem value='Batch C'>Batch C</SelectItem>
                <SelectItem value='Batch D'>Batch D</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Button >
            <ClipboardSignatureIcon />
            Take Class
          </Button>

          <Button variant={"outline"} size={"lg"} >
            <div className='flex -space-x-2'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <span>Add TA</span>
          </Button>
        </div>
      </div>

      <div className='mt-4 relative'>
        <div className='w-full h-2 bg-gray-200 rounded-full overflow-hidden'>
          <div className='w-3/4 h-full bg-gray-900 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
