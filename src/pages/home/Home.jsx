import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="home">
            <div className="home-content">
                <h1>
                    Welcome to Vidyarthi !
                </h1>
                <p>
                   A platform where you can learn and share your knowledge with others.  </p> 
                   <button className="common-btn" onClick={()=>navigate("/courses")}>Get Started</button>

            </div>
        </div>
        <Testimonials/>
    </div>
  )
}

export default Home