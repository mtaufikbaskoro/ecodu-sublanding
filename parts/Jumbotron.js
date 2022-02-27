import slider from "react-slick/lib/slider";
import Card from "../components/Card";
import Carousel from '../components/Slider';
import {motion} from 'framer-motion'


const Jumbotron = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 2,
        className: "slides center xl:max-w-5xl md:max-w-md max-w-xs",
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
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
                    dots: false
                }
            }
        ]
    }
    const datas = [
        {
            lesson: 'SKD',
            imgUrl: '/assets/materi/skd.png',
            desc: 'Mulai dari TIU (Tes Itelegensia Umum), TWK (Tes Wawasan Kebangsaan) sampai TKP (Tes Karakteristik Pribadi) diajarkan di sini. Lengkap dan anti tersesat pastinya.'
        },
        {
            lesson: 'Kelas TPS UTBK',
            imgUrl: '/assets/materi/tpsUtbk.png',
            desc: 'Seluruh bagian Tes Potensi Skolastika bakal diajarkan disini. Mulai dari hitungan, logika sampai Bahasa inggris lengkap ada semua disini.'
        },
        {
            lesson: 'Kelas TPA dan TBI',
            imgUrl: '/assets/materi/tpaTbi.png',
            desc: 'Tes Akademik dan Tes Bahasa Inggris tetap kami ajarkan untuk menghadapi hal-hal yang tak terduga di ujian nanti. Siap menghadapi ujian tanpa rasa khawatir.'
        },
        {
            lesson: 'Kelas Psikotes',
            imgUrl: '/assets/materi/psikotes.png',
            desc: 'Seluruh materi psikotes juga diajarkan di sini, papikostik, menggambar manusia, wartegg, dan lainnya pasti diajari di sini.'
        },
        {
            lesson: 'Kelas Wawancara',
            imgUrl: '/assets/materi/wawancara.png',
            desc: 'Meskipun terkesan mudah, nyatanya bagian ujian satu ini banyak yang gugur. Tapi tenang, di ecodu kamu juga dibimbing menghadapi tahapan satu ini.'
        },
        {
            lesson: 'Kelas Kesehatan dan Kebugaran',
            imgUrl: '/assets/materi/kesehatanKebugaran.png',
            desc: 'Kami akan menemani kamu hingga akhir perjuangan. Di Kelas ini kamu akan dibimbing dengan dokter dan juga alumni sekolah kedinasan yang berpengalaman.'
        },
    ]
    return(
        <div className="xl:max-w-7xl lg:max-w-2xl max-w-sm mx-auto">
            <div className="text-center py-28">
                <motion.h1 
                    initial={{opacity: 0, y:100}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{delay: 0.2}}
                    viewport={{once: true}} 
                    className="text-primary-color font-bold md:text-4xl text-2xl uppercase">
                    Ecodu - Stan
                </motion.h1>
                <motion.p 
                    initial={{opacity: 0, y:100}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{delay: 0.5}}
                    viewport={{once: true}} 
                    className="mt-11 text-additional-color-100 md:text-2xl text-md">
                        Mulai persiapan kamu bareng Ecodu. Dengan <span className="font-bold">sistem Lock-Open</span> yang membuat belajar kamu jadi lebih terarah dan mudah memahami materi apa yang harus duluan kamu kuasai. Membuat soal ujian masuk STAN terasa jauh lebih mudah dari yang kamu bayangkan!
                </motion.p>
            </div>
            <motion.div
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.8}}
                viewport={{once: true}}  
                className="py-12">
                <div className="grid xl:grid-cols-lesson-col gap-10 items-center">
                    <h2 className="text-primary-color font-bold md:text-4xl text-2xl px-8 leading-relaxed text-center xl:text-left">Jadi Materi yang Kamu Dapatkan di Kelas Ini</h2>
                    <div className="mx-auto xl:mx-0">
                    <Carousel settings={sliderSettings}>
                        {
                            datas.map((data, index) => {
                                return <Card data={data} key={index} />
                            })
                        }
                    </Carousel>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Jumbotron;