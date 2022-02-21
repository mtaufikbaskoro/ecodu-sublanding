import PricingCard from "../components/PricingCard";

const Pricing = () => {
    return(
        <div className="mt-24 xl:max-w-7xl max-w-2xl mx-auto">
            <h1 className="text-4xl text-center text-primary-color font-bold">Pilihan Paket Belajar</h1>
            <div className="mt-24 grid xl:grid-cols-3 xl:gap-10 gap-20">
                <PricingCard />
                <PricingCard />
                <PricingCard />
            </div>
            <div className="my-16 text-center">
                <a className="text-additional-color-200 text-md font-bold bg-primary-color cursor-pointer px-10 py-4 rounded-md hover:underline" href="#">Sudah punya paket belajar ? Klik disini !</a>
            </div>
        </div>
    )
}

export default Pricing;