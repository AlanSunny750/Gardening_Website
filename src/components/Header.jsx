function Header() {

    return(
        <>
        
        <div 
        className="HEADER mt-20 w-[calc(100%-20px)] mr-auto ml-auto 
        bg-[url(./src/assets/images/HBG-high.jpg)] bg-no-repeat bg-cover 
        ">
            <div className="flex flex-col gap-12 text-4xl font-bold text-[#2D3748] p-[40px]">

                <h1 className="H1">
                    <p className=" text-[#2D3748] text-3xl">  Welcome to your backyard!</p>
                </h1>

                <div className="text">
                    <p> GROW URBAN GARDENS! </p>
                    <p> WITH </p>
                    <p> GARDEN.COM </p>
                </div>

                <div>
                    <p className="text-lg text-[#2D3748] border-l-4 border-blue-600 pl-2"> Built to help you virtualize your farm,
                    <br/> and grow virtually! </p>
                </div>

                <button 
                className="CTA h-fit w-fit p-3 rounded text-[#2D3748]
                hover:bg-black hover:text-white border border-gray-400
                transition duration-200 text-2xl flex"
                > GET STARTED   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

            </button>

        </div>
    </div>

        </>
    )
}

export default Header