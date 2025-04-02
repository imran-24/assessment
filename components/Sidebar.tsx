"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronRight, Menu } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [batchMenuOpen, setBatchMenuOpen] = useState(true);

  const hrefggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='relative flex h-full'>
      {/* Sidebar hrefggle buthrefn */}
      {isCollapsed && (
        <Button
          onClick={hrefggleSidebar}
          size={"icon"}
          variant={"ghost"}
          className='fixed top-3 left-0 '
        >
          <Menu />
        </Button>
      )}

      <aside
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-0 overflow-hidden" : "w-52"
        } bg-white border-r border-gray-200 h-full`}
      >
        <nav className='p-4 flex flex-col h-full'>
          <div className='space-y-4 flex-1'>
            <Button
              variant={"ghost"}
              className='w-full flex items-center justify-between py-2 text-base font-normal'
            >
              <Link href='/' className=''>
                <span>Teach</span>
              </Link>
              <Button

                onClick={hrefggleSidebar}
                size={"icon"}
                className='size-6 p-1 bg-black flex items-center justify-center rounded-full'
              >
                <ArrowLeft className='text-white' />
              </Button>
            </Button>

            <Button
              variant={"ghost"}
              className='py-2 w-full flex items-center justify-start text-base font-normal'
            >
              <Link href='/dashboard' className=''>
                <span>Dashboard</span>
              </Link>
            </Button>

            {/* <Button variant={"ghost"} 
            className='py-2 w-full '> */}
            <Collapsible open={batchMenuOpen} onOpenChange={setBatchMenuOpen}>
              <CollapsibleTrigger className='w-full flex items-center justify-between '>
                <Button
  
                  variant={"ghost"}
                  className='py-2 w-full flex items-center justify-between text-base font-normal'
                >
                  <div className="flex items-center space-x-1">
                    <span>Manage Batch</span>
                    <div>
                      {batchMenuOpen ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </div>
                  </div>
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className='ml-6  space-y-1'>
                  <Button
    
                    className='w-full flex items-center justify-start text-base font-normal'
                    variant={"ghost"}
                  >
                    <Link href='/all-batches'>All Batches</Link>
                  </Button>
                  <Button
    
                    className='w-full flex items-center justify-start text-base font-normal'
                    variant={"ghost"}
                  >
                    <Link href='/resources'>Resources</Link>
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>
            {/* </Button> */}

            <Button
              variant={"ghost"}
              className='py-2 w-full flex items-center justify-start text-base font-normal'
            >
              <Link href='/earnings' className=''>
                <span>My Earnings</span>
              </Link>
            </Button>

            <Button
              variant={"ghost"}
              className='py-2 w-full flex items-center justify-start text-base font-normal'
            >
              <Link href='/timetable' className=''>
                <span>Timetable</span>
              </Link>
            </Button>

            <Button
              variant={"ghost"}
              className='py-2 w-full flex items-center justify-start text-base font-normal'
            >
              <Link href='/analytics' className=''>
                <span>Analytics</span>
              </Link>
            </Button>
          </div>

          <div className='mt-auhref space-y-2'>
            <Button
              variant={"ghost"}
              className='py-2 w-full flex items-center justify-start text-base font-normal'
            >
              <Link href='/profile' className=''>
                <span>Manage Profile</span>
              </Link>
            </Button>

            <Button
              variant={"ghost"}
              className='py-2 w-full flex items-center justify-start text-base font-normal'
            >
              <Link href='/settings' className=''>
                <span>Settings</span>
              </Link>
            </Button>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
