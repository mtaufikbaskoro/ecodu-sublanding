import Image from "next/image"

const Card = (props) => {
    // console.log(props)
    return(
        <div className="xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-primary-color text-additional-color-200 hover:bg-additional-color-200 hover:text-primary-color border-0 hover:border-4 hover:border-additional-color-400 transition ease-in-out rounded-md">
            <div className="pt-2 px-2">
                <Image src="/assets/download.jpg" alt="image-lesson" width={300} height={200} className="xl:w-11/12 rounded-md border-0" />
            </div>
            <div className="text-center">
                <h3 className="text-2xl">{props.title}</h3>
                <p className="text-justify text-base mt-4 px-7 flex-1 pb-28">{props.desc}</p>
            </div>
        </div>
    )
}


export default Card