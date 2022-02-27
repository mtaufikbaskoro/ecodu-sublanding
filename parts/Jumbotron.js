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
            lesson: 'Kesehatan dan Kebugaran',
            imgUrl: '/assets/materi/kesehatanKebugaran.png',
            desc: 'Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau'
        },
        {
            lesson: 'Psikotes',
            imgUrl: '/assets/materi/psikotes.png',
            desc: 'Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau'
        },
        {
            lesson: 'SKD',
            imgUrl: '/assets/materi/skd.png',
            desc: 'Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau'
        },
        {
            lesson: 'TPA dan TBI',
            imgUrl: '/assets/materi/tpaTbi.png',
            desc: 'Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau'
        },
        {
            lesson: 'TPS UTBK',
            imgUrl: '/assets/materi/tpsUtbk.png',
            desc: 'Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau'
        },
        {
            lesson: 'Wawancara',
            imgUrl: '/assets/materi/wawancara.png',
            desc: 'Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau'
        }
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
                    <span className="font-bold uppercase">Ecodu - stan</span> adalah seluruh materi lengkap di Bimbingan Belajar Ecodu dengan metode cara cepat yang akan membuat soal ujian masuk STAN terasa jauh lebih mudah dari yang kamu bayangkan!
                </motion.p>
            </div>
            <motion.div
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.8}}
                viewport={{once: true}}  
                className="py-12">
                <div className="grid xl:grid-cols-lesson-col gap-10 items-center">
                    <h2 className="text-primary-color font-bold md:text-4xl text-2xl px-8 leading-relaxed text-center xl:text-left">Materi yang kamu dapetin hari ini</h2>
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