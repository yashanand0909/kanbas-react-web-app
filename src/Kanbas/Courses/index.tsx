import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import BreadcrumbTop from "./Breadcrumbs";
import CompressedNav from "./Navigation/compressedNav";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find(
    (course) => course._id === courseId);
  return (
    <>
        <CompressedNav />
        <div className="wd-left-margin-100 me-5 d-none d-md-block">
            <div className="d-flex">
                <span className="wd-kanbas-hyperlink"><h2><HiMiniBars3 /></h2></span>
                <span className="wd-left-margin-20 mt-2"><h4><BreadcrumbTop  courseId = {courseId!} courseName={course?.name!}/></h4></span>
            </div>
            <hr />
        </div>
        <div className="d-flex">
        <CourseNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
    </div>
    </>
);}

export default Courses;