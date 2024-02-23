import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
//   const assignmentList = assignments.filter((types) => types.type === "Assignment").filter(
//     (assignment) => assignment.course === courseId);
  return (
    <div className="wd-left-margin-10 me-5">
        <input
        className="form-control w-25 float-start"
        placeholder="Search for Assignment"/>

        <a href="#">
        <button type="submit" className="btn btn-light float-end">
        <i className="fa fa-ellipsis-v mt-1"></i>
        </button>
        </a>
        <a href="#">
        <button
        type="submit"
        className="btn btn-danger float-end me-1 wd-kanbas-save-profile btn-danger">
        <i className="fa fa-plus"></i>  
        <span className="wd-left-margin-10">Assignment</span>
        </button>
        </a>
        <a href="#">
        <button type="submit" className="btn btn-light float-end me-1">
        <i className="fa fa-plus"></i>
        <span className="wd-left-margin-10">Group</span>
        </button>
        </a>
        <br />
        <br/>
        <hr/>
        <br/>
        {assignments.map((type) => (
            <>
            <ul className="list-group rounded-0">
            <li
            className="list-group-item list-group-item-secondary wd-kanbas-module-header-padding wd-kanbas-list-group-header">
            <div>
                <b>{type.type}</b>
                <i className="fa fa-ellipsis-v float-end mt-1"></i>
                <i className="fa fa-plus float-end mt-1 me-3"></i>
                <div
                className="border border-dark rounded-pill float-end me-3 wd-kanbas-assignment-total">
                {type.percent}
                </div>
            </div>
            </li>
          <ul className="list-group">
            {type.value.filter((assignments) => assignments.course === courseId).map((assignment) => (
                <li className="list-group-item wd-kanbas-assignment-border">
                <div className=" ms-3">
                    <i className="fa fa-pencil-square-o fa-2x float-start mt-3  mb-3 icon-front wd-kanbas-green"></i>
                <i className="fa fa-ellipsis-v float-end mt-1"></i>
                <i className="fa fa-check-circle float-end mt-1 me-3 wd-kanbas-green ps-5"></i>
                <div>
                        
                </div>
                <h5 className=" mt-1 mb-1">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-kanbas-no-underline wd-kanbas-black">
                    {assignment.title}
                    </Link>
                </h5>
                <div>
                    {assignment.discription}
                    <br/>
                    {assignment.timeline}</div>
                </div>
            </li>
            ))}
          </ul>
        </ul>
        <br />
        </>
        ))}
    </ div>
);}
export default Assignments;