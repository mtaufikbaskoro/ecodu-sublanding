import Card from "../components/Card";

const Jumbotron = () => {
    return(
        <div className="xl:max-w-7xl max-w-2xl mx-auto">
            <div className="text-center py-28">
                <h1 className="text-primary-color font-bold text-4xl uppercase">Ecodu - Stan</h1>
                <p className="mt-11 text-additional-color-100 text-2xl"><span className="font-bold uppercase">Ecodu - stan</span> adalah seluruh materi lengkap di Bimbingan Belajar Ecodu dengan metode cara cepat yang akan membuat soal ujian masuk STAN terasa jauh lebih mudah dari yang kamu bayangkan!</p>
            </div>
            <div className="py-12 px-6">
                <div className="grid grid-cols-lesson-col gap-10">
                    <h2 className="text-primary-color font-bold text-4xl leading-relaxed">Materi yang kamu dapetin hari ini</h2>
                    <div>
                        <Card title="Bahasa Inggris" desc="Lorem ipsum sit dolor containouee su parte un lodaire dot mo tau" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;