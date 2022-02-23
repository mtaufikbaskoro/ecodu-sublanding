import TestimonialCard from "../components/TestimonialCard"

const Testimonial = () => {
    return(
        <div className="xl:max-w-7xl lg:max-w-2xl max-w-sm mx-auto grid xl:grid-cols-testimonial gap-20">
            <div  className="sm:mx-auto xl:mx-0 flex">
                <TestimonialCard />
            </div>
            <div className="text-additional-color-200 xl:text-right text-center">
                <h1 className="md:text-4xl text-2xl font-semibold">Testimoni</h1>
                <p className="mt-6 md:text-2xl text-lg">Pengalaman siswa belajar dengan kami</p>
            </div>
        </div>
    )
}

export default Testimonial