import slider from "react-slick/lib/slider";
import Card from "../components/Card";
import Carousel from '../components/Slider';
import {motion} from 'framer-motion'
import { useEffect, useState } from "react";


const Jumbotron = (props) => {
    const { page, lessons } = props;
    const [classNames, setClassNames] = useState({});
    useEffect(() => {
        if(page === 'stan'){
            setClassNames({
                h1: 'text-stan-100 font-bold md:text-4xl text-2xl uppercase'
            })
        }else if(page === 'ipdn'){
            setClassNames({
                h1: 'text-ipdn-100 font-bold md:text-4xl text-2xl uppercase'
            })
        }
    }, [])
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
    return(
        <div className="xl:max-w-7xl lg:max-w-2xl max-w-sm mx-auto">
            <div className="text-center py-28">
                <motion.h1 
                    initial={{opacity: 0, y:100}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{delay: 0.2}}
                    viewport={{once: true}} 
                    className={classNames.h1}>
                    Ecodu - <span className="uppercase">{page}</span>
                </motion.h1>
                <motion.p 
                    initial={{opacity: 0, y:100}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{delay: 0.5}}
                    viewport={{once: true}} 
                    className="mt-11 text-additional-color-100 md:text-2xl text-md">
                        Mulai persiapan kamu bareng Ecodu. Dengan <span className="font-bold">sistem Lock-Open</span> yang membuat belajar kamu jadi lebih terarah dan mudah memahami materi apa yang harus duluan kamu kuasai. Membuat soal ujian masuk <span className="uppercase">{page}</span> terasa jauh lebih mudah dari yang kamu bayangkan!
                </motion.p>
            </div>
            <motion.div
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.8}}
                viewport={{once: true}}  
                className="py-12">
                <div className="grid xl:grid-cols-lesson-col gap-10 items-center">
                    <h2 className={`text-${page}-100 font-bold md:text-4xl text-2xl px-8 leading-relaxed text-center xl:text-left`}>Jadi Materi yang Kamu Dapatkan di Kelas Ini</h2>
                    <div className="mx-auto xl:mx-0">
                    <Carousel settings={sliderSettings}>
                        {
                            lessons.map((data, index) => {
                                return <Card data={data} key={index} page={page} />
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