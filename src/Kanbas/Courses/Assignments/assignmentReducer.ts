import { createSlice } from "@reduxjs/toolkit";
import {assignments} from "../../Database";

console.log(assignments);
const initialState = {
  assignmentsList: assignments.filter((ass) => ass.type == 'Assignments')[0].value,
  assignment: {
    title: "New Assignment Title",
    course: "Assignment's Course",
    description: "New Description",
    points: "100",
    dueDate: "2023-09-18",
    availableFromDate: "2023-09-11",
    availableUntilDate: "2023-09-18",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignmentsList = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignmentsList,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignmentsList = state.assignmentsList.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignmentsList = state.assignmentsList.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;