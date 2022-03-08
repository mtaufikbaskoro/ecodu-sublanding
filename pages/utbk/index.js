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
    const page = 'utbk'
    const [toggle, setToggle] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [classNames, setClassNames] = useState({});
    const [consultLink, setConsultLink] = useState('https://bit.ly/paket-utbk-ecodu');
    // const [page, setPage] = useState('stan')
    const [lessons, setLessons] = useState([
        {
            lesson: 'TPS',
            imgUrl: '/assets/utbk/materi/TPS.png',
            desc: 'Seluruh bagian Tes Potensi Skolastika bakal diajarkan disini. Mulai dari hitungan, logika sampai Bahasa Inggris lengkap semua ada d di sini'
        },
        {
            lesson: 'SAINTEK',
            imgUrl: '/assets/utbk/materi/SAINTEK.png',
            desc: 'Di kelas Saintek nantinya kamu bakal diajari Matematika, Fisika, Kimia dan juga Biologi. Anti tersesat bareng pengajar yang berpengalaman di bidangnya'
        },
        {
            lesson: 'SOSHUM',
            imgUrl: '/assets/utbk/materi/SOSHUM.png',
            desc: 'Mulai dari Geografi, Sejarah, Sosiologi, sampai Ekonomi akan diajarkan di kelas ini. Mulai dari "0" bareng tentor yang ahli di tiap bidangnya'
        },
    ])
    const [pricings, setPricings] = useState([
        {
            name: 'SUPER',
            benefits: [
                'Puluhan Video Konsep Dasar Teori TPS & SAINTEK/SOSHUM',
                'Puluhan Video Kupas Tuntas Paket Soal Bahasa',
                '5 Paket Try Out UTBK',
                'Latihan Mingguan',
                'Diskusi Harian Siswa Ecodu',
                'Perpustakaan Bahan Belajar',
                'Live Class (Pertemuan Lebih Sedikit)',
                'Diskusi Soal dengan Tentor',
                'Konsultasi & Motivasi Belajar Bersama Mentor',
                'Rangkuman Belajar',
                'Bebas Akses Web sampai Pengumuman Ujian Mandiri'
            ],
            price: '1.000.000',
            afterDisc: '289.000',
            status: 'normal',
            link: 'https://bit.ly/super-utbk-ecodu'
        },
        {
            name: 'WARRIOR',
            benefits: [
                'Puluhan Video Konsep Dasar Teori TPS & SAINTEK/SOSHUM',
                'Puluhan Video Kupas Tuntas Paket Soal Bahasa',
                '20 Paket Try Out UTBK',
                'Latihan Mingguan',
                'Diskusi Harian Siswa Ecodu',
                'Perpustakaan Bahan Belajar',
                'Live Class',
                'Kelas Pemantapan',
                'Diskusi Soal dengan Tentor',
                'Konsultasi & Motivasi Belajar Bersama Mentor',
                'Webinar & Try Out Spesial',
                'Akses Tanya Pengajar',
                'Kelas Google Classroom',
                'Rangkuman Belajar',
                'Bebas Akses Web sampai Pengumuman Ujian Mandiri'
            ],
            price: '1.250.000',
            afterDisc: '349.000',
            status: 'Best Deals',
            link: 'https://bit.ly/warrior-utbk-ecodu'
        },
        {
            name: 'MASTER',
            benefits: [
                'Puluhan Video Konsep Dasar Teori TPS & SAINTEK/SOSHUM',
                'Puluhan Video Kupas Tuntas Paket Soal Bahasa',
                '60 Paket Try Out UTBK',
                'Latihan Mingguan',
                'Diskusi Harian Siswa Ecodu',
                'Perpustakaan Bahan Belajar',
                'Live Class',
                'Kelas Pemantapan',
                'Diskusi Soal dengan Tentor',
                'Konsultasi & Motivasi Belajar Bersama Mentor',
                'Webinar & Try Out Spesial',
                'Akses Tanya Pengajar',
                'Kelas Google Classroom',
                'Rangkuman Belajar',
                'Bebas Akses Web sampai Pengumuman Ujian Mandiri',
                'Free Kelas Zoom Persiapan Ujian Mandiri'
            ],
            price: '1.500.000',
            afterDisc: '399.000',
            status: 'best seller',
            link: 'https://bit.ly/master-utbk-ecodu'
        }
    ])
    const [testimonials, setTestimonials] = useState([
        {
            name: 'Marchia Larasati',
            imgUrl: '/assets/utbk/testimoni/marchia.png',
            school: 'Ilmu Politik Universitas Indonesia - SBMPTN 2021',
            testimonial: 'Belajar di Ecodu sangat membantu aku berhasil masuk ke universitas impian. Aku jadi terbiasa mengerjakan soal-soal UTBK karena jadwal belajar dan latihan soal yang rutin. Metode belajar yang asyik dan interaktif membuat aku merasa lebih nyaman pada saat pembelajaran. Kakak-kakak pengajar juga selalu dengan senang hati membimbing hingga aku betul-betul paham dengan materi. Terima kasih banyak Ecodu!'
        },
        {
            name: 'Naufal Rizky Ramadhan',
            imgUrl: '/assets/utbk/testimoni/naufal.png',
            school: 'Matematika Universitas Indonesia - SBMPTN 2021',
            testimonial: 'Aku belajar di Ecodu seru-seru banget kakak-kakak tentornya. Cara pembelajarannya juga interaktif banget sama siswa-siswanya. Pokoknya the best lah. Sukses selalu Ecodu.'
        },
        {
            name: 'Mutiara Abdiyah',
            imgUrl: '/assets/utbk/testimoni/mutiara.png',
            school: 'Teknik Industri Pertanian, IPB - SBMPTN 2021',
            testimonial: 'Terima kasih untuk Ecodu telah banyak membantu saya dalam belajar UTBK untuk menggapai PTN impian saya. Saya tidak menyesal memilih belajar di Ecodu'
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
            jumbotron: 'bg-stansah bg-opacity-25 bg-no-repeat bg-cover',
            testimonial: 'mt-56 py-20 bg-utbk-100'
        })
        return() => {
        window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className='relative min-h-[100vh]'>
            <Head>
                <title>Ecodu.id - UTBK</title>
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
