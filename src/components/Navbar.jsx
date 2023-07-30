import {Link} from 'react-router-dom'

function Navbar() {

    return(
        <> 
            <div className="NAVBAR flex fixed top-0 left-0 right-0 h-14 w-full bg-emerald-400 z-10">

                
                <div className="NAV_ITEMS text-white flex absolute top-1/2 transform -translate-y-1/2 w-full">
                    
                    <div className="LOGO_CONTAINER">
                        <div className="LOGO p-1 text-white text-[18px]"> Gardener.com </div>
                    </div>

                    <div className="ANCHERS flex gap-20 ml-auto mr-auto">
                        <a href="" className="hover:bg-white hover:text-black transition duration-450 rounded-[5px] py-[8px]
                        px-[12px] text-center"> Home </a>
                        <a href="" className="hover:bg-white hover:text-black transition duration-450 rounded-[5px] py-[8px]
                        px-[12px] text-cente"> Contact </a>
                        <a href="" className="hover:bg-white hover:text-black transition duration-450 rounded-[5px] py-[8px]
                        px-[12px] text-cente"> About </a>
                    </div>

                    <div className="AUTH flex gap-5 ml-auto mr-5">
                       
                      <Link to="/login">
                        <div className="LOGIN h-fit w-fit text text-white py-[8px] px-[12px] hover:bg-white 
                        hover:text-black hover:border-white border border-black cursor-pointer transition duration-fast rounded-[5px]"> Login </div>
                       </Link>
                       
                       <Link to="/signup">
                            <div className="SIGN_UP  h-fit w-fit bg-white text text-black py-[8px] px-[12px] hover:bg-transparent 
                            hover:text-white border hover:border-black cursor-pointer transition duration-fast rounded-[5px]"
                            > Sing up </div>
                        </Link>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Navbar
