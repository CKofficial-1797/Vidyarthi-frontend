import { createContext, useEffect, useState, useContext } from "react";
import { server } from "../main";
import axios from "axios";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({});
    const [mycourse, setMyCourse] = useState([]);

    async function fetchCourses() {
        try {
            const { data } = await axios.get("http://localhost:3000/api/course/all");
            setCourses(data.courses);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    }
    async function fetchCourse(id){
        try {
            const {data} = await axios.get(`http://localhost:3000/api/course/${id}`);
            setCourse(data.course);
        } catch (error) {
            
        }
    }

    async function fetchMyCourses() {
        try {
            const { data } = await axios.get(`${server}/api/mycourse`, {
                headers: {
                    token: localStorage.getItem("token"),
                }
            });
            
            setMyCourse(data.courses);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    }

    useEffect(() => {
        fetchCourses();
        fetchMyCourses();
    }, []);

    return ( 
        <CourseContext.Provider value={{ courses , fetchCourses , course , fetchCourse ,
            mycourse , fetchMyCourses
        }}>
            {children}
        </CourseContext.Provider>
    );
};

export const CourseData = () => useContext(CourseContext); 
