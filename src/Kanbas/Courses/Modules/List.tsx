import React, { useState } from "react";
import "../../kanbasCSS/style.css";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-end">
            <button type="button" className="btn btn-light">Collapse All</button>
            <button type="button" className="btn btn-light">View Progress</button>
            <button type="button" className="btn btn-light"><i className="fa fa-check" aria-hidden="true" style={{"color" : "green", "marginRight": "3px"}}></i>Publish All</button>
            <button type="button" className="btn btn-danger"><i className="fa fa-plus" aria-hidden="true" style={{"marginRight": "3px"}}></i>Module</button>
            <button type="button" className="btn btn-light"><i className="fa fa-ellipsis-v ms-2"></i></button>
        </div>
        <hr />
      <ul className="list-group wd-modules mt-5">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item wd-kanbas-assignment-border" style={{"padding":"0px", "borderRadius":"0px"}}
            onClick={() => setSelectedModule(module)}>
            <div className="wd-kanbas-list-group-header">
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" style={{ "borderRadius":"0px"}} key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;