import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const assignment = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();
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
            <>
            <ul className="list-group rounded-0">
            <li
            className="list-group-item list-group-item-secondary wd-kanbas-module-header-padding wd-kanbas-list-group-header">
            <div>
                <b>{'Assignment'}</b>
                <i className="fa fa-ellipsis-v float-end mt-1"></i>
                <i className="fa fa-plus float-end mt-1 me-3"></i>
                <div
                className="border border-dark rounded-pill float-end me-3 wd-kanbas-assignment-total">
                40% of Total
                </div>
            </div>
            </li>
          <ul className="list-group">
            {assignments.filter((assign: { course: string | undefined; }) => assign.course === courseId).map((assig: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; discription: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; timeline: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                <li className="list-group-item wd-kanbas-assignment-border">
                <div className=" ms-3">
                    <i className="fa fa-pencil-square-o fa-2x float-start mt-3  mb-3 icon-front wd-kanbas-green"></i>
                <i className="fa fa-ellipsis-v float-end mt-1"></i>
                <i className="fa fa-check-circle float-end mt-1 me-3 wd-kanbas-green ps-5"></i>
                <div>
                        
                </div>
                <h5 className=" mt-1 mb-1">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-kanbas-no-underline wd-kanbas-black">
                    {assig.title}
                    </Link>
                </h5>
                <div>
                    {assig.discription}
                    <br/>
                    {assig.timeline}</div>
                </div>
            </li>
            ))}
          </ul>
        </ul>
        <br />
        </>
    </ div>
);}
export default Assignments;