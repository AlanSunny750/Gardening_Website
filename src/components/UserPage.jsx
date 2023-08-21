import { useState } from "react"
import { Link } from "react-router-dom"

function UserPage() {
    let url = 'http://localhost:3000'

    let [userDetails, setUserDetails] = useState({})
    window.onload = () => {
        fetch(url + '/user_page')
        .then(response => response.json())
        .then(data => {
            setUserDetails(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }

    return(<>


        <Link to='/'> <button className="absolute top-1/2 right-1/2 h-50px w-100px bg-red-50">Home</button> </Link> 

        <div className="MAIN">
            <div className="USER">
                <div className="PROFILE">
                    <img src="" className="PROFILE_IMG"/>
                </div>
                <div className="USER_DETAILS">
                    {userDetails.name + userDetails.lastName}
                    <span className="NAME"></span>
                    <span className="LAST_NAME"></span>
                </div>
            </div>
        </div>

    </>)
}

export default UserPage