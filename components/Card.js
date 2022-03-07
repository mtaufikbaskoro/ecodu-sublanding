import Image from "next/image"

const Card = (props) => {
    const {data, page} = props
    return(
        <div className={`xl:w-lesson-card md:w-[200px] mx-2 md:mx-0 flex flex-col items-center justify-start gap-6 bg-${page}-100 text-additional-color-200 hover:bg-additional-color-200 hover:text-${page}-100 border-4 hover:border-4 hover:border-${page}-200 transition ease-in-out rounded-md`}>
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