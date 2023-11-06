// import { CourseNavbar } from "@/components/courses/navbar";
// import { CourseDashboardSidebar } from "@/components/courses/sidebar";

import { GroupToolsDashboardSidebar } from "@/components/grouptools/Sidebar";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        {/* <CourseNavbar /> */}
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <GroupToolsDashboardSidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;