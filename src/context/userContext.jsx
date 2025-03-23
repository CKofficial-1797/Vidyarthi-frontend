
import {createContext,useContext, useState, useEffect} from 'react';
import axios from 'axios';
import {server} from '../main';
import toast, {Toaster} from 'react-hot-toast';

const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const [user ,setUser] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [loading, setLoading] = useState(false);

    async  function registerUser (name,email,password,navigate){
        setBtnLoading(true);
        try {
            const {data} = await axios.post(`${server}/api/user/register`,{name, email,password});
                
            toast.success(data.message);
            localStorage.setItem("activationToken",data.activationToken);
            localStorage.setItem("name",data.name);
            localStorage.setItem("email",data.email);
            localStorage.setItem("password",data.password);

           
            setBtnLoading(false);
            navigate("/verify");

                           
        } catch (error) {
            setBtnLoading(false);
            toast.error(error.response.data.message);
            
        }
    }
    async  function loginUser (email,password,navigate ,fetchMyCourses){
        setBtnLoading(true);
        try {
            const {data} = await axios.post(`${server}/api/user/login`,{email,password});
                
            toast.success(data.message);
            localStorage.setItem("token",data.token);
            setUser(data.user);
            setIsAuth(true);
            setBtnLoading(false);
            navigate("/");
            fetchMyCourses();


                           
        } catch (error) {
            setIsAuth(true);
            setBtnLoading(false);
            toast.error(error.response.data.message);
            
        }
    }
    async function verifyOtp(otp ,navigate){
        setBtnLoading(true);
        const activationToken = localStorage.getItem("activationToken");
        const email = localStorage.getItem("email");
        const name = localStorage.getItem("name");

        const password = localStorage.getItem("password");


        
        try {
            const {data} = await axios.post(`${server}/api/user/verify`,{otp,
                activationToken,
                email,
                password,
                name,
            });
                    
             toast.success(data.message);
             navigate("/login");
             localStorage.clear();
             setBtnLoading(false);
    
            
        } catch (error) {
            
            toast.error(error.response.data.message);
            setBtnLoading(false);
            
        }
    }

    async function fetchUser (){
       try {
        const {data} =await axios.get(`${server}/api/user/me`, 
        {
            headers:{
                token : localStorage.getItem("token"),
            }
        });
        setIsAuth(true);
        setUser(data.user);
        setLoading(false);

       } catch (error) {
        console.log(error);
        setLoading(false);

        
       } 
    };
   

useEffect(()=>{
    fetchUser();
},[]);

    return (
        <UserContext.Provider value={{user, setUser,setIsAuth ,isAuth , loginUser, btnLoading, loading , btnLoading ,
            registerUser, verifyOtp,
            fetchUser,
         }}>
            {children}
            <Toaster/>

        </UserContext.Provider>
    )
}
export const UserData = () => useContext(UserContext);


