import {motion} from 'framer-motion'
import Image from 'next/image';

const Contact = () => {
    return(
        <div className="xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto pt-32 flex flex-col justify-center items-center text-center z-50">
            <motion.h2
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.2}}
                viewport={{once: true}} 
                className="md:text-4xl text-2xl text-primary-color font-bold z-10">
                    Singkatnya Kualitas Layanan setara dengan Elite Class di Bimbel Offline Masuk Perguruan Tinggi seharga 8 - 20 Juta++
            </motion.h2>
            <motion.p 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.5}}
                viewport={{once: true}} 
                className="mt-6 xl:w-[640px] text-additional-color-200 md:text-xl text-md z-10">
                Tunggu apalagi ? Ribuan pesaingmu sudah mulai mempersiapkan diri, Kamu masih bingung ? ayo konsultasikan masa depanmu dengan ECODU !
            </motion.p>
            <motion.a 
                href="#" 
                className="mt-6 text-additional-color-200 font-bold bg-additional-color-100 border-4 hover:bg-slate-700 border-dotted cursor-pointer px-10 py-2 rounded-full z-10 transition ease-in-out"
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.8}}
                viewport={{once: true}} >
                    Hubungi Kami
            </motion.a>
            <Image quality={100} src="/assets/stacked-waves.png" layout='fill' className='bottom-0 z-[-9999]' />
        </div>
    )
}

export default Contact;