const Banner = (props) => {
    const {title} = props
    return(
        <div className="bg-additional-color-200 md:w-20 w-16 -mt-16 flex text-center items-center text-additional-color-100 border-2 border-additional-color-100">
            <h1 className="md:text-lg text-sm font-bold uppercase py-6">{title}</h1>
        </div>
    )
}

export default Banner