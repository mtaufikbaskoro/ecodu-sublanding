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
    const page = 'stan'
    const [toggle, setToggle] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    // const [page, setPage] = useState('stan')
    const [lessons, setLessons] = useState([
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
    ])
    const [pricings, setPricings] = useState([
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
            status: 'normal',
            link: 'https://bit.ly/super-stan-ecodu'
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
            status: 'Best Deals',
            link: 'https://bit.ly/warrior-stan-ecodu'
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
            status: 'best seller',
            link: 'https://bit.ly/master-stan-ecodu'
        }
    ])
    const [testimonials, setTestimonials] = useState([
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
        return() => {
        window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className='relative min-h-[100vh]'>
            <Head>
                <title>Ecodu.id - STAN</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="apple-touch.svg" />
            </Head>
            <div>
                <div className={`${scrollPosition > 150 ? "translate-y-24" : ""} fixed -top-24 w-full z-20 bg-additional-color-200 shadow transition ease-in-out`}>
                    <Navbar handleToggle={handleToggle} />
                </div>
                <div className={`bg-${page}sah bg-opacity-25 bg-no-repeat bg-cover`}>
                    <Navbar handleToggle={handleToggle} />
                    <Jumbotron page={page} lessons={lessons} />
                </div>
                <Pricing pricings={pricings} page={page} />
                <div className={`mt-56 py-20 bg-${page}-100`}>
                    <Testimonial testimonials={testimonials} page={page} />
                </div>
                <div className='mt-24 xl:pb-96 pb-20 relative overflow-hidden'>
                    <Contact page={page} />
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
