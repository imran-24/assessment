import CourseContent from "@/components/CourseContent";
import CourseHeader from "@/components/CourseHeader";
import CourseNavigation from "@/components/CourseNavigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className='max-w-full h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
         <main className='flex-1 overflow-y-auto '>
          <div className='max-w-7xl mx-auto space-y-6'>
            <CourseHeader />
             <CourseNavigation />
            <div className='bg-white shadow rounded-lg'>
              <CourseContent />
            </div>
          </div>
        </main> 
      </div> 
    </div>
  );
}
