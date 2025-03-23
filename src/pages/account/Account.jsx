import React from 'react'
import "./account.css";
import {MdDashboard} from "react-icons/md";
import { UserData } from '../../context/userContext';
import { toast } from 'react-hot-toast';
import {IoMdLogOut} from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Account = ({user}) => {
    const {setIsAuth, setUser} = UserData();
    const navigate = useNavigate();
    const logoutHandler = () =>{
        localStorage.clear();;
        setUser([]);
        setIsAuth(false);
        toast.success("Logged out successfully");
        navigate("/login");
    }
  return (
    <div>
        {user && <div className="profile">
            <h2>
                My Profile
            </h2>
            <div className="profile-info">
                <p>
                    <strong>Name:</strong> {user.name}

                </p>
                <p>
                    <strong>Email:</strong>-{user.email}
                </p>
                <button onClick={()=>navigate(`/${user._id}/dashboard`)}
                className="common-btn"><MdDashboard/>    Dashboard</button>
                <br />
                {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn"
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}

                <button onClick={logoutHandler}   className="common-btn" style={{backgroundColor: "red" }}><IoMdLogOut/>   Logout</button>

            </div>
        </div>}
    </div>
  )
}

export default Account