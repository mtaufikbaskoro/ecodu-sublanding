import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Jumbotron from '../../parts/Jumbotron'
import Pricing from '../../parts/Pricing'
import Testimonial from '../../parts/Testimonial'
import Navbar from "../../components/Navbar";
import Contact from '../../parts/Contact';
import Footer from '../../parts/Footer';
import MobileMenu from '../../components/MobileMenu';

export default function StanPage(props) {
    const page = 'stis'
    const [toggle, setToggle] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [classNames, setClassNames] = useState({});
    const [consultLink, setConsultLink] = useState('https://bit.ly/paket-stis-ecodu');
    // const [page, setPage] = useState('stan')
    const [lessons, setLessons] = useState([
        {
            lesson: 'SKD',
            imgUrl: '/assets/stis/materi/SKD.png',
            desc: 'Mulai dari TIU (Tes Itelegensia Umum), TWK (Tes Wawasan Kebangsaan) sampai TKP (Tes Karakteristik Pribadi) diajarkan di sini. Lengkap dan anti tersesat pastinya.'
        },
        {
            lesson: 'Kelas Matematika',
            imgUrl: '/assets/stis/materi/Matematika.png',
            desc: 'Tidak hanya SKD, disini kamu juga dibimbing menghadapi ujian TKA Matematika IPA. Dan juga ada kumpulan Try Outnya lho.'
        },
        {
            lesson: 'Kelas Psikotes',
            imgUrl: '/assets/stis/materi/Psikotes.png',
            desc: 'Seluruh materi psikotes juga diajarkan di sini, papikostik, menggambar manusia, wartegg, dan lainnya pasti diajari di sini.'
        },
        {
            lesson: 'Kelas Wawancara',
            imgUrl: '/assets/stis/materi/Wawancara.png',
            desc: 'Meskipun terkesan mudah, nyatanya bagian ujian satu ini banyak yang gugur. Tapi tenang, di ecodu kamu juga dibimbing menghadapi tahapan satu ini.'
        },
        {
            lesson: 'Kelas Kesehatan dan Kebugaran',
            imgUrl: '/assets/stis/materi/KesehatanKebugaran.png',
            desc: 'Kami akan menemani kamu hingga akhir perjuangan. Di Kelas ini kamu akan dibimbing dengan dokter dan juga alumni sekolah kedinasan yang berpengalaman.'
        },
    ])
    const [pricings, setPricings] = useState([
        {
            name: 'SUPER',
            benefits: [
                '28 Video Materi Matematika IPA',
                '70++ Video Materi SKD',
                'Pretest & Post Test',
                '5x Try Out Matematika IPA',
                '5x Try Out SKD',
                'Grup Siswa',
                'Live Sharing Session Bareng Mahasiswa PTK'
            ],
            price: '600.000',
            afterDisc: '199.000',
            status: 'normal',
            link: 'https://bit.ly/super-stis-ecodu'
        },
        {
            name: 'WARRIOR',
            benefits: [
                '28 Video Materi Matematika IPA',
                '70++ Video Materi SKD',
                '20x Try Out SKD',
                '20x Try Out Matematika IPA',
                'Pretest & Post Test',
                'Special Try Out',
                'Perpustakaan Siswa',
                'Live Sharing Session bareng Mahasiswa PTK',
                'Kelas Latihan Google Classroom'
            ],
            price: '999.000',
            afterDisc: '259.000',
            status: 'Best Deals',
            link: 'https://bit.ly/warrior-stis-ecodu'
        },
        {
            name: 'MASTER',
            benefits: [
                '28 Video Materi Matematika IPA',
                '70++ Video Materi SKD',
                '60x Try Out SKD',
                '40x Try Out Matematika IPA',
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
            status: 'best seller',
            link: 'https://bit.ly/master-stis-ecodu'
        }
    ])
    const [testimonials, setTestimonials] = useState([
        {
            name: 'M Yahya Abdurrahman',
            imgUrl: '/assets/stis/testimoni/yahya.png',
            school: 'Polstat STIS 2021',
            testimonial: 'Bagi kalian yang ingin masuk polstat STIS, mengikuti Bimbel Ecodu adalah pilihan yang tepat. Disini kalian akan diberikan materi yang cukup lengkap dan latihan soal rutin. Para pengajarnya asik dan pandai menyampaikan materi. Belum cukup sampai disitu, kalian akan lebih siap menghadapi ujian masuk Polstat STIS dengan puluhan Try Out yang tersedia di Ecodu.'
        },
        {
            name: 'Saniyyah',
            imgUrl: '/assets/stis/testimoni/sanniyah.png',
            school: 'Polstat STIS 2021',
            testimonial: 'Selama gabung di Ecodu jadi ngerasa ada teman belajar. Apalagi buat skd yang sebelumnya aku engga tahu tesnya seperti apa. Tutor-tutornya juga asik jelasinnya, bikin ngerti. Latihan soalnya pun beragam. Banyak Try Outnya pula. Mantap pokoknya.'
        },
        {
            name: 'Himawan Wahid',
            imgUrl: '/assets/stis/testimoni/himawan.png',
            school: 'Polstat STIS 2021',
            testimonial: 'Ecodu mantab video penjelasannya sangat jelas mulai dari 0'
        },
    ])

  
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position)
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        setClassNames({
            jumbotron: 'bg-stissah bg-opacity-25 bg-no-repeat bg-cover',
            testimonial: 'mt-56 py-20 bg-stis-100'
        })
        return() => {
        window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className='relative min-h-[100vh]'>
            <Head>
                <title>Ecodu.id - STIS</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="apple-touch.svg" />
            </Head>
            <div>
                <div className={`${scrollPosition > 150 ? "translate-y-24" : ""} fixed -top-24 w-full z-20 bg-additional-color-200 shadow transition ease-in-out`}>
                    <Navbar handleToggle={handleToggle} />
                </div>
                <div className={classNames.jumbotron}>
                    <Navbar handleToggle={handleToggle} />
                    <Jumbotron page={page} lessons={lessons} />
                </div>
                <Pricing pricings={pricings} page={page} />
                <div className={classNames.testimonial}>
                    <Testimonial testimonials={testimonials} page={page} />
                </div>
                <div className='mt-24 xl:pb-96 pb-20 relative overflow-hidden'>
                    <Contact page={page} linkref={consultLink} />
                    <div className='hidden xl:block absolute bottom-0 waves z-[-10]'></div>
                </div>
                    {/* <Image quality={100} src="/assets/layeredwaves.svg" layout='fill' className='bottom-0 z-[-9999]' /> */}
                <div className="bg-additional-color-100">
                    <Footer />
                </div>
                <MobileMenu toggle={toggle} handleToggle={handleToggle} />
            </div>
        </div>
    )
}
