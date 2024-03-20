import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./kanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [coursesList, setCourses] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "aerodynamics.png"
  });
  const addNewCourse = () => {
    const newCourse = { ...coursesList,
                        _id: new Date().getTime().toString() };
    setCourses([...coursesList, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(coursesList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      coursesList.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };  
   return (
    <Provider store={store}>
     <div className="d-flex">
       <KanbasNavigation />
       <div style={{ flexGrow: 1 }}>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
                        <Dashboard
                        courses={coursesList}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}/>
          } />
            <Route path="Courses" element={<Navigate to="/Kanbas/Dashboard" />} />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={coursesList} />}
            />
        </Routes>

       </div>
     </div>
      </Provider>
   );
 }
 
 export default Kanbas;