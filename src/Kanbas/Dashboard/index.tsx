import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }
) {
  return (
    <div className="p-4 wd-left-margin-100">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control mt-1" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control mt-1" 
        onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
      <input value={course.startDate} className="form-control mt-1" type="date" 
        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control mt-1" type="date" 
        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className="btn btn-success mt-2" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-secondary mt-2 ms-2" onClick={updateCourse} >
        Update
      </button>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={require(`./images/${course.image}`)} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                  <button className="btn btn-secondary ms-1" onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                  }}>
                  Edit
                  </button>
                    <button className="btn btn-danger float-end" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;