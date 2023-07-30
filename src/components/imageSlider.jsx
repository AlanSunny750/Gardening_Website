import { useState } from "react"

function ImageSlider() {

    let [imgCount, setImgCount] = useState(0);

    let images = [
        'images&&icons/img0.png',
        'images&&icons/img1.png',
        'images&&icons/img2.png'
    ]

    const next = () => {
        if(imgCount < images.length - 1) {
            setImgCount(imgCount + 1)
        } else {
            setImgCount(imgCount - images.length - 1)
        }
        console.log(imgCount)
    }

    const prev = () => {
        if(imgCount > 0) {
            setImgCount(imgCount - 1)
        } else {
            setImgCount(imgCount = images.length - 1)
        }
        console.log(imgCount)
    }


    return (
        <>
       
            <div className="IMG_SLIDER relative h-500px w-full bg-red-300 overflow-x-hidden">

                <div onClick={next} className="NEXT absolute left-0 top-1/2 h-12 w-10 ml-3
                bg-green-400 flex justify-center rounded-[5px]  hover:bg-green-600 cursor-pointer">

                    <span className="fa fa-angle-left text-white text-[30px] leading-[48px]"></span>
                </div>

                <div onClick={prev} className="PREV absolute right-0 top-1/2 h-12 w-10 mr-3
                 bg-green-400 flex justify-center rounded-[5px] hover:bg-green-600 cursor-pointer">

                    <span className="fa fa-angle-right text-white text-[30px] leading-[48px]"></span>
                </div> 

                    <img className="IMAGE flex h-[500px] w-full bg-red-500" src={images[imgCount]}/>
            </div>
        
        </>
    )
}

export default ImageSlider