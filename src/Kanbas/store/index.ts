import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import assignmentsReducer from "../Courses/Assignments/assignmentReducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignmentsList: any[];
    assignment: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  }
});


export default store;