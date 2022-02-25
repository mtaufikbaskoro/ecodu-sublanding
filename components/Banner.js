const Banner = (props) => {
    const {title} = props
    if(title === 'best seller'){
        return(
            <div className="bg-additional-color-200 md:w-20 w-16 -mt-16 flex text-center items-center text-additional-color-100 border-2 border-additional-color-100">
                <h1 className="md:text-lg text-sm font-bold uppercase py-6">Best Deals</h1>
            </div>
        )
    }else{
        return(
            <div className="bg-additional-color-200 md:w-20 w-16 -mt-16 flex text-center items-center text-[#8C112A] border-2 border-[#8C112A]">
                <h1 className="md:text-lg text-sm font-bold uppercase py-6">{title} Off</h1>
            </div>
        )
    }
}

export default Banner