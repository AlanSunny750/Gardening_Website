import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function UserPage() {
    let url = 'http://localhost:3000';

    let [userDetails, setUserDetails] = useState({});
    let [Success, setSuccess] = useState(undefined);
    let [error, setError] = useState('');
    let [taValue, setTaValue] = useState('')
    
    useEffect(() => {
        fetch(url + '/user_page')
            .then(response => {
                if (!response.ok) {
                    setError('Failed to fetch user details');
                }
                return response.json();
            })
            .then(data => {
                localStorage.clear()
                localStorage.setItem('email', data.email);
                localStorage.setItem('name', data.name);
                localStorage.setItem('lastName', data.lastName)
                setUserDetails(data);
                setSuccess(true)
            })
            .catch(err => setError(err.message));
    }, []);
    
    return(<>


        <Navbar />

        <div className="MAIN flex w-[80%] h-fit bg-white mx-auto p-[20px] mt-16"> 

            <div className="USER flex flex-col gap-4 bg-slate-50 w-[40%] p-[10px] rounded-md shadow-2xl">
            <div className={`w-full p-[4px] ${Success ? 'bg-green-300' : 'bg-red-300'}`}> {Success ? 'Login successful!': 'User data not found!'} </div>

                <div className="PROFILE w-[30%] aspect-square rounded-[50%] mx-auto">
                    <img src="./src/assets/images/Lavender.jpg" className="PROFILE_IMG h-full w-full rounded-[50%]"/>
                </div>
                <div className="USER_DETAILS text-lg w-[80%] mx-auto text-center border-gray-400 border-b-2">
                    <div className="Name">
                        <span className="NAME"> {userDetails.name} </span>
                        <span className="LAST_NAME"> {userDetails.lastName} </span>
                        <p className="EMAIL text-sm"> {userDetails.email} </p>

                    </div>

                    
                    <div className="about">
                        <textarea 
                        onChange={(e) => {
                            setTaValue(e.target.value)
                            console.log(taValue)
                        }}
                        className="w-full text-sm p-[10px] mt-12" placeholder="Who am i..?" rows="6 "> </textarea>
                    </div>
                    <button className={`submit w-full text-white bg-green-400 rounded-md py-[10px] none ${taValue.length <= 0 ? 'hidden' : 'visible'}`}> Done </button>
                </div>
            </div>
        </div>
    </>)
}

export default UserPage