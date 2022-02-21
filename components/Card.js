const Card = (props) => {
    // console.log(props)
    return(
        <div className="w-lesson-card flex flex-col items-center justify-start gap-6 bg-primary-color text-additional-color-200 hover:bg-additional-color-200 hover:text-primary-color border-0 hover:border hover:border-additional-color-100 drop-shadow-2xl transition ease-in-out rounded-md">
            <img src="/assets/download.jfif" className="w-11/12 mt-4 rounded-md border-0" />
            <div className="text-center">
                <h3 className="text-2xl">{props.title}</h3>
                <p className="text-justify text-base mt-4 px-7 flex-1 pb-28">{props.desc}</p>
            </div>
        </div>
    )
}


export default Card