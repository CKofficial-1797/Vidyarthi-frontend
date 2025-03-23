import React from 'react'
import "./courses.css"
import { CourseData } from '../../context/CourseContext'; 
import CourseCard from '../../components/coursecard/CourseCard';
const Courses = () => {
  const {courses} = CourseData();
  console.log(courses);
  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-container">
        {
          courses && courses.length>0 ?( courses.map((e)=>
            <CourseCard course={e} key={e._id}/>
           )):(<p> No courses available </p>)
        }
      </div>
    </div>
  )
}

export default Courses