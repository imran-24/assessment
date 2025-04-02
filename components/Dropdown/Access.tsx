
import { ChevronDown, Eye } from "lucide-react";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";



export const Access = () => {
  return (
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
  );
};

export default Access;
