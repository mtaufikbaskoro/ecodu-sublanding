import Image from "next/image";

const TestimonialCard = (props) => {
    const {data, page} = props
    return(
        <div className={`bg-additional-color-200 text-${page}-100 flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow`}>
            <div className="flex gap-3 items-center">
                <div className="w-20 h-20 relative">
                    <Image className="bg-additional-color-300 rounded-full" width={80} height={80} src={data.imgUrl} alt="image-persona" />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <h1 className="text-sm bg-additional-color-100 text-additional-color-200 p-3 rounded">Lulus {data.school}</h1>
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