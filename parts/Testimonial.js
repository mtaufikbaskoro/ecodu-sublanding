import TestimonialCard from "../components/TestimonialCard"

const Testimonial = () => {
    return(
        <div className="xl:max-w-7xl max-w-2xl mx-auto grid grid-cols-testimonial">
            <div>
                <TestimonialCard />
            </div>
            <div className="text-right text-additional-color-200">
                <h1 className="text-4xl font-semibold">Testimoni</h1>
                <p className="mt-6 text-2xl">Pengalaman siswa belajar dengan kami</p>
            </div>
        </div>
    )
}

export default Testimonial