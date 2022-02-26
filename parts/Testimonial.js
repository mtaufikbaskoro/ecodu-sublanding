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
    const datas = [
        {
            name: 'Choirul Fatah',
            imgUrl: '/assets/testimoni/ChoirulFatah.png',
            school: 'DIV Manajemen Keuangan Negara PKN STAN 2021',
            testimonial: 'Belajar di ecodu sangat seru karena para pengajarnya sangat friendly sehingga kita tidak sungkan dalam bertanya jawab. Di ecodu juga para pengajarnya sangat perhatian.'
        },
        {
            name: 'Aulia Maray',
            imgUrl: '/assets/testimoni/AuliaMaray.png',
            school: 'DIV Akuntansi Sektor Publik PKN STAN 2021',
            testimonial: 'Alhamdulillah, terima kasih bimbel Ecodu udah bantuin persiapan serangkaian tes PKN STAN sejak tkk, psikotes, hingga wawancara. Webinarnya mudah banget dimengerti dan tutornya keren-keren! Latihan soalnya juga banyak dan sangat membantu. Once again, thank youu ecodu!'
        },
        {
            name: 'Muhammad Hasan Hasibuan',
            imgUrl: '/assets/testimoni/MuhammadHasan.png',
            school: 'DIV Manajemen Keuangan Negara PKN STAN 2021',
            testimonial: 'Buat teman-teman yang mau masuk kedinasan aku rekomendasiin ecodu dah, kalian bakal dibimbing untuk persiapan menuju sekdin yang kalian impikan, kakak kakak tutornya juga ramah, ngejelasin materinya juga cukup rinci,ecodu juga cocok buat kalian yang nyari bimbel online kedinasan dengan harga terjangkau, tapi dapat fasilitas yg cukup baikk, pokoknya toopp dahh.'
        }
    ]
    return(
        <motion.div 
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y:0}}
            transition={{delay: 0.5}}
            viewport={{once: true}} 
            className="xl:max-w-7xl lg:max-w-2xl max-w-xs mx-auto grid xl:grid-cols-testimonial gap-20">
            <div className="sm:mx-auto xl:mx-0">
                <Carousel settings={sliderSetting}>
                    {
                        datas.map((data, index) => {
                            return(
                                <TestimonialCard key={index} data={data} />
                            )
                        })
                    }
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