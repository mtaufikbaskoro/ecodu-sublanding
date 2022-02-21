import Image from "next/image";

const Footer = () => {
    return(
        <div className="xl:max-w-7xl max-w-2xl mx-auto py-20 grid xl:grid-cols-4 grid-cols-2 gap-10 text-additional-color-200">
            <div className="flex flex-col gap-6">
                <div>
                    <img className="bg-additional-color-200 p-2 rounded" width={82} height={37} src="/assets/ecodu.png" alt="logo" />
                </div>
                <h4 className="text-lg font-bold">PT Ecodu Pedjuang Harapan</h4>
                <p className="text-md">Kompleks Kenangan Palace</p>
                <p className="text-md text-justify">Jalan Kenanga Raya No. B3, Kelurahan Tanjung Sari, Kecamatan Medan Selayang, Kota Medan, Sumatera Utara, 20133 (Depan Kantor Balai PAUD)</p>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="text-lg font-bold">Produk Ecodu</h4>
                <div className="flex flex-col gap-2">
                    <a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out">Bimbel Ecodu STAN</a>
                    <a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out">Bimbel Ecodu STIS</a>
                    <a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out">Bimbel Ecodu SEKDIN Lainnya</a>
                    <a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out">Bimbel Ecodu IPDN</a>
                    <a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out">Bimbel Ecodu UTBK</a>
                    <a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out">SiapUjian.id</a>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-bold">Hubungi Kami</h4> 
                    <div className="flex gap-3 items-center">
                        <div className="w-[32px] h-[32px] bg-[#333]"></div>
                        <p className="text-md">admin@ecodu.id</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="w-[32px] h-[32px] bg-[#333]"></div>
                        <p className="text-md">0811-6016-010</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-bold">Sosial Media</h4>
                    <div className="flex gap-6">
                        <div className="w-[40px] h-[40px] bg-[#333]"></div>
                        <div className="w-[40px] h-[40px] bg-[#333]"></div>
                        <div className="w-[40px] h-[40px] bg-[#333]"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-lg font-bold">Toko Buku</h4>
                <div className="flex gap-3 items-center">
                    <div className="w-[32px] h-[32px] bg-[#333]"></div>
                    <p className="text-md">Tokopedia</p>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="w-[32px] h-[32px] bg-[#333]"></div>
                    <p className="text-md">Shopee</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;