import PricingCard from "../components/PricingCard";
import { motion } from "framer-motion";

const Pricing = () => {
    const datas = [
        {
            name: 'SUPER',
            benefits: [
                '51 Video Materi TPA & TBI',
                '70++ Video Materi SKD',
                '25++ Video Materi TPS',
                'Pretest & Post Test',
                '5x Try Out TPA & TBI',
                '5x Try Out SKD',
                '5x Try Out TPS',
                'Grup Siswa',
                'Live Sharing Session Bareng Mahasiswa PTK'
            ],
            price: '600.000',
            afterDisc: '199.000',
            status: 'normal'
        },
        {
            name: 'WARRIOR',
            benefits: [
                '51 Video Materi TPA & TBI',
                '70++ Video Materi SKD',
                '25++ Video Materi TPS',
                '20x Try Out TPA & TBI',
                '20x Try Out SKD',
                '20x Try Out TPS',
                'Pretest & Post Test',
                'Special Try Out',
                'Perpustakaan Siswa',
                'Live Sharing Session bareng Mahasiswa PTK',
                'Kelas Latihan Google Classroom'
            ],
            price: '999.000',
            afterDisc: '259.000',
            status: 'Best Deals'
        },
        {
            name: 'MASTER',
            benefits: [
                '51 Video Materi TPA & TBI',
                '70++ Video Materi SKD',
                '25++ Video Materi TPS',
                '60x Try Out TPA & TBI',
                '60x Try Out SKD',
                '60x Try Out TPS',
                'Pretest & Post Test',
                'Special Try Out',
                'Mastery Program',
                'Perpustakaan Siswa',
                'Live Sharing Session bareng Mahasiswa PTK',
                'Kelas Belajar Via Whatsapp & Zoom',
                'Kelas Latihan Google Classroom',
                'Akses Tanya Pengajar'
            ],
            price: '1.199.000',
            afterDisc: '359.000',
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