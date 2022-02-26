import Image from "next/image";

const TestimonialCard = (props) => {
    const {data} = props
    return(
        <div className="bg-additional-color-200 text-primary-color flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow">
            <div className="flex gap-3 items-center">
                <div className="w-20 h-20 overflow-hidden bg-additional-color-300 rounded-full relative">
                    <Image layout="fill" src={data.imgUrl} alt="image-persona" />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <h1 className="text-md bg-additional-color-100 text-additional-color-200 p-3 rounded">Lulus {data.school}</h1>
                    <h4>{data.name}</h4>
                </div>
            </div>
            <p className="text-justify">&quot;{data.testimonial}&quot;</p>
        </div>
    )
}

export default TestimonialCard;