function Weather() {

    return (
        <>
        <div className="CONTAINER w-full h-[600px] bg-green-400">
            <h1 className="text-[34px] font-bold mt-[20px]"> Weather today!</h1>

            <div className="WEATHER_INFO">
                <div className="TODAY"> </div>
                <div className="TOMMOROW"> </div>
            </div>

            <div className="SEASON">
                Perfect season for <span className="SEASON_CROP"> Corn! </span>
            </div>

        </div>
        </>
    )
}

export default Weather