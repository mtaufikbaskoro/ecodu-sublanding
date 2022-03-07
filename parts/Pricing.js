import PricingCard from "../components/PricingCard";
import { motion } from "framer-motion";
import {useState} from 'react'

const Pricing = (props) => {
    const {pricings, page} = props
    const [theme, setTheme] = useState({
        text: `text-${page}-100`
    })
    return(
        <div id="pricing" className="mt-24 xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto">
            <motion.h1 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.2}}
                viewport={{once: true}} 
                className={`md:text-4xl text-2xl text-center ${theme.text} font-bold`}>
                Pilihan Paket Belajar
            </motion.h1>
            <motion.div 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.5}}
                viewport={{once: true}} 
                className="mt-24 grid xl:grid-cols-3 xl:gap-10 gap-20">
                {
                    pricings.map((data, index) => {
                        return(
                            <PricingCard key={index} data={data} page={page} />
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
                <a href="https://app.ecodu.id" className="text-additional-color-200 text-xs lg:text-lg font-bold bg-additional-color-100 cursor-pointer px-7 py-4 rounded-md hover:underline">Sudah punya paket belajar ? Klik disini !</a>
            </motion.div>
        </div>
    )
}

export default Pricing;