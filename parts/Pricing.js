import PricingCard from "../components/PricingCard";
import { motion } from "framer-motion";

const Pricing = () => {
    const datas = [
        {
            name: 'Paket A',
            benefits: [
                'Video On Demand of Lesson Shared',
                'Mentoring full Provide',
                '1 Hours per Day',
            ],
            price: 200000,
            disc: 20,
            status: 'normal'
        },
        {
            name: 'Paket B',
            benefits: [
                'Video On Demand of Lesson Shared',
                'Mentoring full Provide',
                '2 Hours per Day',
                'Guarantee 50% Money Back'
            ],
            price: 300000,
            disc: 15,
            status: 'normal'
        },
        {
            name: 'Paket C',
            benefits: [
                'Video On Demand of Lesson Shared',
                'Mentoring full Provide',
                '5 Hours per Day',
                'Guarantee 90% Money Back',
                'Guarantee 90% Money Back',
                'Guarantee 90% Money Back',
                'Guarantee 90% Money Back',
                'Guarantee 90% Money Back',
            ],
            price: 599000,
            disc: 30,
            status: 'best seller'
        }

    ]
    return(
        <div className="mt-24 xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto">
            <motion.h1 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.2}}
                viewport={{once: true}} 
                className="md:text-4xl text-2xl text-center text-primary-color font-bold">
                Pilihan Paket Belajar
            </motion.h1>
            <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.5}}
                viewport={{once: true}} 
                className="mt-24 grid xl:grid-cols-3 xl:gap-10 gap-20">
                {
                    datas.map((data, index) => {
                        return(
                            <PricingCard key={index} data={data} />
                        )
                    })
                }
            </motion.div>
            <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.5}}
                viewport={{once: true}} 
                className="my-16 text-center">
                <a className="text-additional-color-200 text-xs lg:text-lg font-bold bg-additional-color-100 cursor-pointer px-7 py-4 rounded-md hover:underline" href="#">Sudah punya paket belajar ? Klik disini !</a>
            </motion.div>
        </div>
    )
}

export default Pricing;