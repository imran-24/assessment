import React from "react";
import { Bell, Users } from "lucide-react";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Header = () => {
  return (
    <header className='border-b border-gray-200 py-3 px-10 flex justify-between items-center bg-white shadow-sm'>
      <div>
        <h1 className='text-xl font-medium text-gray-900 '>Teachers Center</h1>
      </div>
      <div className='hidden lg:flex items-center gap-2'>
        <Button
          variant={"ghost"}
          size={"icon"}
          className='rounded-full transition-colors'
        >
          <Users />
        </Button>
        <Button
          variant={"ghost"}
          size={"icon"}
          className='rounded-full transition-colors'
        >
          <Bell />
          <span className='absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full'></span>
        </Button>
        <div className='h-8 border-l border-gray-300 mx-2'></div>
      </div>
      <div className='flex items-center gap-2'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className=''>
          <h2 className='text-sm font-semibold'>Sir 1</h2>
          <p className='text-xs text-gray-600'>Chemistry | Level 3</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
