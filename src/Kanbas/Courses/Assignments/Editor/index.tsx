import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find((type) => type.type === "Assignments")?.value.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="me-5">
    <div className="wd-kanbas-green float-end mt-2 ">
    <i className="fa fa-check-circle wd-kanbas-green" aria-hidden="true"></i>
        Published
        <button type="button" className="btn btn-light"><i className="fa fa-ellipsis-v ms-2"></i></button>
    </div>
    <br />
    <br />
    <hr />
    <label htmlFor="input-1" className="form-label"> Assignment Name </label>
      <input value={assignment?.title}
             className="form-control mb-2" />
    <br />
    <textarea className="form-control">This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.</textarea>
    <br />
    <div className="container">
        <div className="row">
        <div className="col-2">
            <div className="float-end">Points</div>
        </div>
        <div className="col-8">
            <input className="form-control" id="input-2" value="100" />
        </div>
        <div className="col-2"></div>
        </div>
        <br />
        <div className="row">
        <div className="col-2">
            <div className="float-end">Assignment Group</div>
        </div>
        <div className="col-8">
            <select className="form-select">
            <option selected>ASSIGNMENTS</option>
            <option value="1">CHECK-1</option>
            <option value="2">CHECK-2</option>
            <option value="3">CHECK-3</option>
            </select>
        </div>
        <div className="col-2"></div>
        </div>

        <br />
                          <div className="row">
                            <div className="col-2">
                              <div className="float-end">Display Grade as</div>
                            </div>
                            <div className="col-8">
                              <select className="form-select">
                                <option selected>PERCENTAGE</option>
                                <option value="1">CHECK-1</option>
                                <option value="2">CHECK-2</option>
                                <option value="3">CHECK-3</option>
                              </select>
                            </div>
                            <div className="col-2"></div>
                          </div>
                  
                          <br />
                          <br/>
                          <div className="row">
                            <div className="col-2">
                              <div className="float-end"></div>
                            </div>
                            <div className="col-8">
                              <input className="form-check-input" type="checkbox" id="check-1" />
                              <label className="form-check-label" htmlFor="check-1"
                                >Do not count this assignment towards the final grade</label>
                            </div>
                            <div className="col-2"></div>
                          </div>

                          <div className="row">
                            <div className="col-2">
                              <div className="float-end">Submission Type</div>
                            </div>
                            <div className="col-8">
                              <ul className="list-group list-group-item kanbas-edit-section">
                                <li className="list-group-item border-0">
                                  <select className="form-select">
                                    <option selected>ONLINE</option>
                                    <option value="1">CHECK-1</option>
                                    <option value="2">CHECK-2</option>
                                    <option value="3">CHECK-3</option>
                                  </select>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <b>Online Entry Options</b>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input className="form-check-input" type="checkbox" id="check-2" />
                                  <label className="form-check-label" htmlFor="check-2">Text Entry</label>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input className="form-check-input" type="checkbox" id="check-3" />
                                  <label className="form-check-label" htmlFor="check-3"
                                    >Website URL</label>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input className="form-check-input" type="checkbox" id="check-4" />
                                  <label className="form-check-label" htmlFor="check-4"
                                    >Media Recordings</label>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input className="form-check-input" type="checkbox" id="check-5" />
                                  <label className="form-check-label" htmlFor="check-5"
                                    >Student Annotation</label>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input className="form-check-input" type="checkbox" id="check-6" />
                                  <label className="form-check-label" htmlFor="check-6"
                                    >File Uploads</label>
                                </li>
                              </ul>
                            </div>
                            <div className="col-2"></div>
                          </div>
                  
                          <br/><br/>
                          <div className="row">
                            <div className="col-2">
                              <div className="float-end">Assign</div>
                            </div>
                            <div className="col-8">
                              <ul className="list-group list-group-item wd-kanbas-edit-section">
                                <li className="list-group-item border-0">
                                  <b>Assign to</b>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input className="form-control" id="input-3" value="Everyone" />
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <b>Due</b>
                                </li>
                  
                                <li className="list-group-item border-0">
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="input-4"
                                    value="2024-01-21"
                                  />
                                </li>
                                <li className="list-group-item border-0">
                                    <div className="row">
                                        <div className="col-6 float-start">
                                            <b className="wd-kanbas-width-45">Available from</b>
                                        </div>
                                        <div className="col-6 wd-float-start">
                                            <b className="wd-kanbas-width-45">Until</b>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="list-group-item border-0">
                                    <div className="row">
                                        <div className="col-6 float-start">
                                            <input
                                            type="date"
                                            className="form-control float-start wd-kanbas-width-45 me-1"
                                            id="input-5"
                                            value="2024-02-21"
                                          />
                                        </div>
                                        <div className="col-6 float-start">
                                            <input
                                                type="date"
                                                className="form-control float-start wd-kanbas-width-45 ms-1"
                                                id="input-6"
                                                value="2024-03-21"
                                            />
                                        </div>
                                    </div>
                                </li>
                              </ul>
                            </div>
                            <div className="col-2"></div>
                          </div>
                        </div>
                  
                        <hr />
                  
                        <div className="float-start">
                          <input className="form-check-input" type="checkbox" id="check-9" />
                          <label className="form-check-label" htmlFor="check-9"
                            >Notify users that this content has changed</label>
                        </div>
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>

  )};
export default AssignmentEditor;