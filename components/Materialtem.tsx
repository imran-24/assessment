import { ChevronDown, ChevronUp, File, Folder } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

import Access from "./Dropdown/Access";
import Actions from "./Dropdown/Actions";

export const MaterialItem = ({
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
      <div className='flex items-start flex-col lg:flex-row lg:items-center gap-2'>
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
            <Access />
            <Actions />
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
