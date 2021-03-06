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
        }else if(page === 'ipdn'){
            setClassNames({
                div: 'xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-ipdn-100 text-additional-color-200 hover:bg-additional-color-200 hover:text-ipdn-100 border-4 hover:border-4 hover:border-ipdn-200 transition ease-in-out rounded-md'
            })
        }else if(page === 'sekdin'){
            setClassNames({
                div: 'xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-sekdin-100 text-additional-color-200 hover:bg-additional-color-200 hover:text-sekdin-100 border-4 hover:border-4 hover:border-sekdin-200 transition ease-in-out rounded-md'
            })
        }else if(page === 'stis'){
            setClassNames({
                div: 'xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-stis-100 text-additional-color-200 hover:bg-additional-color-200 hover:text-stis-100 border-4 hover:border-4 hover:border-stis-200 transition ease-in-out rounded-md'
            }) 
        }else if(page === 'utbk'){
            setClassNames({
                div: 'xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-utbk-100 text-additional-color-200 hover:bg-additional-color-200 hover:text-utbk-300 border-4 hover:border-4 hover:border-utbk-300 transition ease-in-out rounded-md'
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