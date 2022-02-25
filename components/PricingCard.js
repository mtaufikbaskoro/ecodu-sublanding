import Banner from "./Banner";

const PricingCard = (props) => {
    const {data} = props;
    return(
        <div className="flex flex-col justify-between gap-5 p-6 bg-primary-color text-additional-color-200 font-semibold rounded-lg drop-shadow-2xl">
            <div className="flex justify-between">
                <h1 className="md:text-4xl text-2xl">{data.name}</h1>
                <div className="flex gap-2">
                    {
                        data.disc !== 'none' ? <Banner title={`${data.disc}%`} /> : <></>
                    }
                    {
                        data.status !== 'normal' ? <Banner title={data.status} /> : <></>
                    }
                </div>
            </div>
            <div className="md:text-lg text-md">
            <hr />
                <h4 className="py-2.5">Kamu dapat :</h4>
                <ul className="list-disc space-y-2.5 pl-6 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-additional-color-400">
                    {
                        data.benefits.map((benefit, index) => {
                            return(
                                <li key={index}>{benefit}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <hr className="mt-20" />
            <div className="flex justify-between items-center">
                <h4>Harga Paket</h4>
                <div className="text-center">
                    {
                        data.disc !== 'none' ? <p className="line-through decoration-[#8C112A] decoration-4">Rp. {data.price}</p> : <></>
                    }
                    {
                        data.disc !== 'none' ? <p className="text-lg">Rp. {data.price - (data.price * data.disc/100)}</p> : <p className="text-lg">Rp. {data.price}</p>
                    }
                </div>
            </div>
            <a className="text-center bg-additional-color-300 hover:bg-additional-color-200 text-primary-color uppercase py-3.5 rounded-lg font-bold cursor-pointer transition ease-in-out">Daftar</a>
        </div>
    )
}

export default PricingCard;