import Banner from "./Banner";
import {useState, useEffect} from 'react';

const PricingCard = (props) => {
    const {data, page} = props;
    const [classNames, setClassNames] = useState({});
    useEffect(() => {
        if(page === 'stan'){
            setClassNames({
                ul: 'list-disc space-y-2.5 pl-6 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-stan-200',
                div: 'flex flex-col justify-between gap-5 p-6 bg-stan-100 text-additional-color-200 font-semibold rounded-lg drop-shadow-2xl',
                a: 'text-center bg-additional-color-300 hover:bg-additional-color-200 text-stan-100 uppercase py-3.5 rounded-lg font-bold cursor-pointer transition ease-in-out'
            })
        }else if(page === 'ipdn'){
            setClassNames({
                ul: 'list-disc space-y-2.5 pl-6 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-ipdn-200',
                div: 'flex flex-col justify-between gap-5 p-6 bg-ipdn-100 text-additional-color-200 font-semibold rounded-lg drop-shadow-2xl',
                a: 'text-center bg-additional-color-300 hover:bg-additional-color-200 text-ipdn-100 uppercase py-3.5 rounded-lg font-bold cursor-pointer transition ease-in-out'
            })
        }else if(page === 'sekdin'){
            setClassNames({
                ul: 'list-disc space-y-2.5 pl-6 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-sekdin-200',
                div: 'flex flex-col justify-between gap-5 p-6 bg-sekdin-100 text-additional-color-200 font-semibold rounded-lg drop-shadow-2xl',
                a: 'text-center bg-additional-color-300 hover:bg-additional-color-200 text-sekdin-200 uppercase py-3.5 rounded-lg font-bold cursor-pointer transition ease-in-out'
            })
        }
    }, [])
    return(
        <div className={classNames.div}>
            <div className="flex justify-between">
                <h1 className="md:text-4xl text-2xl">{data.name}</h1>
                <div className="flex gap-2">
                    {
                        data.status !== 'normal' ? <Banner title={data.status} /> : <></>
                    }
                </div>
            </div>
            <div className="md:text-lg text-md">
            <hr />
                <h4 className="py-2.5">Kamu dapat :</h4>
                <ul className={classNames.ul}>
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
                        data.disc !== 'none' ? <p className="line-through decoration-[#8C112A] decoration-2 text-lg">Rp. {data.price}</p> : <></>
                    }
                    {
                        data.afterDisc !== 'none' ? <p className="text-xl">Rp. {data.afterDisc}</p> : <></>
                    }
                </div>
            </div>
            <a href={data.link} className={classNames.a}>Daftar</a>
        </div>
    )
}

export default PricingCard;