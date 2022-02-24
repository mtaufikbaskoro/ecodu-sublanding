import Carousel from "../components/Slider"
import TestimonialCard from "../components/TestimonialCard"
import { motion } from "framer-motion"

const Testimonial = () => {
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: true,
        slidesToScroll: 1,
        className: "slides center xl:max-w-4xl md:max-w-sm max-w-xs",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }
        ]
    }
    return(
        <motion.div 
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y:0}}
            transition={{delay: 0.5}}
            viewport={{once: true}} 
            className="xl:max-w-7xl lg:max-w-2xl max-w-xs mx-auto grid xl:grid-cols-testimonial gap-20">
            <div className="sm:mx-auto xl:mx-0">
                <Carousel settings={sliderSetting}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Carousel>
            </div>
            <div className="text-additional-color-200 xl:text-right text-center">
                <h1 className="md:text-4xl text-2xl font-semibold">Testimoni</h1>
                <p className="mt-6 md:text-2xl text-lg">Pengalaman siswa belajar dengan kami</p>
            </div>
        </motion.div>
    )
}

export default Testimonial