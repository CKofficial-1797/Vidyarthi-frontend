import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import { UserData } from "../../context/userContext";
import toast from "react-hot-toast";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { fetchUser } = UserData();
    const { fetchCourse, course, fetchCourses , fetchMyCourses} = CourseData();

    useEffect(() => {  
        if (fetchCourse) fetchCourse(params.id);
    }, [fetchCourse, params.id]);

    const checkoutHandler = async () => {
        // if (!window.Razorpay) {
        //     toast.error("Payment gateway failed to load.");
        //     return;
        // }

        const token = localStorage.getItem("token");
        console.log(token);
        
        setLoading(true);

        try {
            console.log(server+'/api/course/checkout/'+params.id);
            
            const { data } = await axios.post(`${server}/api/course/checkout/${params.id}`, {}, {
                headers: { token },
            });
            const { order } = data;

            const options = {
                key: "rzp_test_ajXmiP6dFFfxra",
                amount: order.id, // Use amount
                currency: "INR",
                name: "Vidyarthi",
                description: "Learn with us",
                order_id: order.id,
                
                handler: async function (response) {
                    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
                    try {
                        const { data } = await axios.post(
                            `${server}/api/verification/${params.id}`,
                            { razorpay_order_id, razorpay_payment_id, razorpay_signature },
                            { headers: { token } }
                        );

                        await fetchUser();
                        await fetchCourses();
                        await fetchMyCourses();
                        toast.success(data.message);
                        navigate(`/payment-success/${razorpay_payment_id}`);
                    } catch (error) {
                        toast.error(error.response?.data?.message || "Payment verification failed");
                    } finally {
                        setLoading(false);
                    }
                },
                theme: { color: "#8a4baf" },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            toast.error(error.response?.data?.message || "Checkout failed");
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              {course && (
                <div className="course-description">
                  <div className="course-header">
                    <img
                      src={`${server}/${course.image}`}
                      alt=""
                      className="course-image"
                    />
                    <div className="course-info">
                      <h2>{course.title}</h2>
                      <p>Instructor: {course.createdBy}</p>
                      <p>Duration: {course.duration} weeks</p>
                    </div>
                  </div>
    
                  <p>{course.description}</p>
    
                  <p>Let's get started with course At ₹{course.price}</p>
    
                  {user && user.subscription.includes(course._id) ? (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="common-btn"
                    >
                      Study
                    </button>
                  ) : (
                    <button onClick={checkoutHandler} className="common-btn">
                      Buy Now
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </>
      );
    };

export default CourseDescription;
