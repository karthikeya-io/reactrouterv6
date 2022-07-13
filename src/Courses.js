import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Courses = () => {
    const courseList = ["React", "Angular", "Vue", "Nodejs"]
    const randomCourseName = courseList[Math.floor(Math.random()* courseList.length)]
  return (
    <div>
      <h1>Course list</h1>
      <h4>Course Card</h4>

      <p>More Test</p>
      <NavLink className="btn" style={
        ({isActive}) => {
            return {
                backgroundColor: isActive ? "pink" : "yellow"
            }
        }
      } to={`/learn/courses/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>
      <NavLink className="btn"  style={
        ({isActive}) => {
            return {
                backgroundColor: isActive ? "pink" : "yellow"
            }
        }
      } to={`/learn/courses/tests`}>
        tests
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Courses;
