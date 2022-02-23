import PricingCard from "../components/PricingCard";

const Pricing = () => {
    return(
        <div className="mt-24 xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto">
            <h1 className="md:text-4xl text-2xl text-center text-primary-color font-bold">Pilihan Paket Belajar</h1>
            <div className="mt-24 grid xl:grid-cols-3 xl:gap-10 gap-20">
                <PricingCard />
                <PricingCard />
                <PricingCard />
            </div>
            <div className="my-16 text-center">
                <a className="text-additional-color-200 text-xs lg:text-lg font-bold bg-primary-color cursor-pointer px-7 py-4 rounded-md hover:underline" href="#">Sudah punya paket belajar ? Klik disini !</a>
            </div>
        </div>
    )
}

export default Pricing;