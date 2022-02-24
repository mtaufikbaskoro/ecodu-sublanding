import Image from "next/image";

const TestimonialCard = () => {
    return(
        <div className="bg-additional-color-200 text-primary-color flex flex-col gap-6 lg:w-testimonial-card w-[320px] h-lesson-card rounded px-5 py-4 border-4 border-additional-color-100 shadow">
            <div className="flex gap-3 items-center">
                <div className="w-32 h-20 overflow-hidden bg-additional-color-300 rounded-full relative">
                    <Image layout="fill" objectFit="contain" src="/assets/mutiara.png" alt="image-persona" />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-md bg-additional-color-100 text-additional-color-200 p-3 rounded">Lulus Teknik Industri Pertanian IPB - SBMPTN 2021</h1>
                    <h4>Mutiara Abdiyah</h4>
                </div>
            </div>
            <p className="text-justify">&quot;Aku belajar di Ecodu seru-seru banget kakak-kakak tentornya. Cara pembelajarannya juga interaktif banget sama siswa-siswanya. Pokoknya the best lah. Sukses selalu Ecodu&quot;</p>
        </div>
    )
}

export default TestimonialCard;