import { useState } from "react"

function ImageSlider() {

    let [imgCount, setImgCount] = useState(0);

    let images = [
        './src/assets/images/img0.jpg',
        './src/assets/images/img1.jpg',
        './src/assets/images/img2.jpg'
    ]

    let imgsLength = images.length - 1;
    console.log(imgsLength)

    const next = () => {
        if(imgCount < imgsLength) {
            setImgCount(imgCount + 1)
        } else if(imgCount == imgsLength) {
            setImgCount(imgCount - imgsLength)
        }
    }

    const prev = () => {
        if(imgCount > 0) {
            setImgCount(imgCount - 1)
        } else {
            setImgCount(imgCount = images.length - 1)
        }
        console.log(images[imgCount])
    }


    return (
        <>
       
            <div 
            className="IMG_SLIDER relative mx-auto w-[80%] aspect-video bg-red-300 overflow-hidden">

            <img 
             src={images[imgCount]}
             className="IMAGE flex w-full h-full bg-red-500"
             />

                <div 
                onClick={next} 
                className="NEXT absolute left-[20px] top-1/2 cursor-pointer"
                >

                    <span 
                    className="fa fa-angle-left text-white text-[28px]"
                    ></span>
                </div>

                <div 
                onClick={prev} 
                className="PREV absolute right-[20px] top-1/2 cursor-pointer"
                >

                    <span 
                    className="fa fa-angle-right text-white text-[28px]"
                    ></span>
                </div>

                    
            </div>
        
        </>
    )
}

export default ImageSlider