import Banner from "./Banner";

const PricingCard = () => {
    return(
        <div className="flex flex-col gap-5 p-6 bg-primary-color text-additional-color-200 font-semibold rounded-lg drop-shadow-2xl">
            <div className="flex justify-between">
                <h1 className="md:text-4xl text-2xl">Paket A</h1>
                <div className="flex gap-2">
                    <Banner title="Best Seller" />
                    <Banner title="20%" />
                </div>
            </div>
            <hr />
            <div className="lg:pr-24 md:text-lg text-md">
                <h4 className="py-2.5">Kamu dapat :</h4>
                <ul className="list-disc space-y-2.5 pl-6">
                    <li>Lorem ipsum dot mu lorea ni uto siamore</li>
                    <li>Lorem ipsum dot mu lorea ni uto siamore</li>
                    <li>Lorem ipsum dot mu</li>
                    <li>Lorem ipsum dot mu</li>
                    <li>Lorem ipsum dot mu</li>
                </ul>
            </div>
            <hr className="mt-20" />
            <div className="flex justify-between ">
                <h4>Harga Paket</h4>
                <div className="text-center">
                    <p className="line-through decoration-[#8C112A] decoration-4">Rp. 500.000</p>
                    <p className="text-lg">Rp. 399.000</p>
                </div>
            </div>
            <a className="text-center bg-additional-color-300 text-primary-color uppercase py-3.5 rounded-lg font-bold">Daftar</a>
        </div>
    )
}

export default PricingCard;