import Image from "next/image";
import {useState, useEffect} from 'react'

const TestimonialCard = (props) => {
    const {data, page} = props
    const [classNames, setClassNames] = useState({});
    useEffect(() => {
        if(page === 'stan'){
            setClassNames({
                div: 'bg-additional-color-200 text-stan-100 flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow',
                h1: 'text-sm bg-additional-color-100 text-additional-color-200 p-3 rounded'
            })
        }else if(page === 'ipdn'){
            setClassNames({
                div: 'bg-additional-color-200 text-ipdn-100 flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow',
                h1: 'text-sm bg-additional-color-100 text-additional-color-200 p-3 rounded'
            })
        }else if(page === 'sekdin'){
            setClassNames({
                div: 'bg-additional-color-200 text-sekdin-200 flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow',
                h1: 'text-sm bg-additional-color-100 text-additional-color-200 p-3 rounded'
            })
        }else if(page === 'stis'){
            setClassNames({
                div: 'bg-additional-color-200 text-stis-200 flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow',
                h1: 'text-sm bg-additional-color-100 text-additional-color-200 p-3 rounded'
            })
        }else if(page === 'utbk'){
            setClassNames({
                div: 'bg-additional-color-200 text-utbk-200 flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow',
                h1: 'text-sm bg-utbk-300 text-additional-color-200 p-3 rounded'
            })
        }
    }, [])
    return(
        <div className={classNames.div}>
            <div className="flex gap-3 items-center">
                <div className="w-20 h-20 relative">
                    <Image className="bg-additional-color-300 rounded-full" width={80} height={80} src={data.imgUrl} alt="image-persona" />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <h1 className={classNames.h1}>Lulus {data.school}</h1>
                    <h4>{data.name}</h4>
                </div>
            </div>
            {
                data.testimonial.length > 200 ? <p className="text-justify">&quot;{data.testimonial.slice(0, 250)}...&quot;</p> : <p className="text-justify">&quot;{data.testimonial}&quot;</p>
            }
        </div>
    )
}

export default TestimonialCard;