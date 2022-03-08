import {motion} from 'framer-motion'
import Image from 'next/image';
import {useState, useEffect} from 'react'

const Contact = (props) => {
    const {page, linkref} = props
    const [classNames, setClassNames] = useState({});
    useEffect(() => {
        if(page === 'stan'){
            setClassNames({
                h2: 'md:text-4xl text-2xl text-stan-100 font-bold'
            })
        }else if(page === 'ipdn'){
            setClassNames({
                h2: 'md:text-4xl text-2xl text-ipdn-100 font-bold'
            })
        }else if(page === 'sekdin'){
            setClassNames({
                h2: 'md:text-4xl text-2xl text-sekdin-100 font-bold'
            })
        }else if(page === 'stis'){
            setClassNames({
                h2: 'md:text-4xl text-2xl text-stis-100 font-bold'
            })
        }
    }, [])
    return(
        <div className="xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto py-40 flex flex-col justify-center items-center text-center relative">
            <motion.h2
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.2}}
                viewport={{once: true}} 
                className={classNames.h2}>
                    Singkatnya Kualitas Layanan setara dengan Elite Class di Bimbel Offline Masuk Perguruan Tinggi seharga 8 - 20 Juta++
            </motion.h2>
            <motion.p 
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.5}}
                viewport={{once: true}} 
                className="mt-6 xl:w-[640px] text-additional-color-100 md:text-xl text-md">
                Tunggu apalagi ? Ribuan pesaingmu sudah mulai mempersiapkan diri, Kamu masih bingung ? ayo konsultasikan masa depanmu dengan ECODU !
            </motion.p>
            <motion.a 
                href={linkref} 
                className="mt-6 text-additional-color-200 font-bold bg-additional-color-100 border-4 hover:bg-slate-700 border-dotted cursor-pointer px-10 py-2 rounded-full transition ease-in-out"
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y:0}}
                transition={{delay: 0.8}}
                viewport={{once: true}} >
                    Hubungi Kami
            </motion.a>
            <div className='absolute xl:right-0 xl:-bottom-12 -bottom-32 -right-20 z-[-10]'>
                <Image src="/assets/Neco_tryout.png" layout='fixed' width={400} height={400} />
            </div>
        </div>
    )
}

export default Contact;