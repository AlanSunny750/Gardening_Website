import { useState } from "react";

function Loading() {
    // const [state, setState] = useState('')

    // setState('Almost there..')
    // setTimeout(() => {
    //     setState('All done. your account was succesfully created!')
    // }, 5000)
    // setTimeout(() => {
    //     window.location.href = appUrl + '/login';
    // }, 8000)

    return(
        <>
        <div className="Main absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
            
            <div className="LOADING 
            bg-green-500 text-white p-[10px] rounded-[50%] ">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" 
            className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            </div>

        </div>
        </>
    )
}

export default Loading