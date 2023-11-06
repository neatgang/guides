

import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Categories } from "./components/categories";
import { SearchInput } from "@/components/courses/search-input";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses/courses-list";

interface SearchPageProps {
    searchParams: {
      title: string;
      categoryId: string;
    }
  };
  
  const SearchPage = async ({
    searchParams
  }: SearchPageProps) => {
    const { userId } = auth();
  
    if (!userId) {
      return redirect("/");
    }
  
    const categories = await db.courseCategory.findMany({
      orderBy: {
        name: "asc"
      }
    });

    if (!categories) {
        return (
            <div>
                <h1>No courses found</h1>
            </div>
        )}
  
    const courses = await getCourses({
        userId,
        ...searchParams,
    });

    if (!courses) {
        return (
            <div>
                <h1>No courses found</h1>
            </div>
        )}
        
        return (
            <>
              <div className="px-6 pt-6 md:hidden md:mb-0 block">
                <SearchInput />
              </div>
              <div className="p-6 space-y-4">
                <Categories
                  items={categories}
                />
                <CoursesList items={courses} />
              </div>
            </>
           );
        }
         

export default SearchPage;