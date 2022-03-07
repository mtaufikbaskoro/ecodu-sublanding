import Image from "next/image"
import {useState, useEffect} from 'react'

const Card = (props) => {
    const {data, page} = props
    const [classNames, setClassNames] = useState({});
    useEffect(() => {
        if(page === 'stan'){
            setClassNames({
                div: 'xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-stan-100 text-additional-color-200 hover:bg-additional-color-200 hover:text-stan-100 border-4 hover:border-4 hover:border-stan-200 transition ease-in-out rounded-md'
            })
        }
    }, [])
    return(
        <div className={classNames.div}>
            <div className="pt-2 px-2">
                <Image src={data.imgUrl} alt="image-lesson" width={300} height={200} className="xl:w-11/12 rounded-md border-0" />
            </div>
            <div className="text-center min-h-[35vh]">
                <h3 className="text-2xl px-1">{data.lesson}</h3>
                <p className="text-justify text-base mt-4 px-6 flex-1 pb-16">{data.desc}</p>
            </div>
        </div>
    )
}


export default Card