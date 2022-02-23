import Card from "../components/Card";
import Carousel from '../components/Slider';


const Jumbotron = () => {
    return(
        <div className="xl:max-w-7xl lg:max-w-2xl max-w-sm mx-auto">
            <div className="text-center py-28">
                <h1 className="text-primary-color font-bold md:text-4xl text-2xl uppercase">Ecodu - Stan</h1>
                <p className="mt-11 text-additional-color-100 md:text-2xl text-md"><span className="font-bold uppercase">Ecodu - stan</span> adalah seluruh materi lengkap di Bimbingan Belajar Ecodu dengan metode cara cepat yang akan membuat soal ujian masuk STAN terasa jauh lebih mudah dari yang kamu bayangkan!</p>
            </div>
            <div className="py-12">
                <div className="grid xl:grid-cols-lesson-col gap-10 items-center">
                    <h2 className="text-primary-color font-bold md:text-4xl text-2xl px-8 leading-relaxed text-center xl:text-left">Materi yang kamu dapetin hari ini</h2>
                    <div className="mx-auto xl:mx-0">
                    <Carousel>
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;