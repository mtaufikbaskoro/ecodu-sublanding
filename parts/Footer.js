import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <div className="xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto py-20 grid xl:grid-cols-4 grid-cols-2 gap-10 text-additional-color-200">
            <div className="flex flex-col gap-6">
                <div>
                    <img className="bg-additional-color-200 p-2 rounded" width={82} height={37} src="/assets/ecodu.png" alt="logo" />
                </div>
                <h4 className="md:text-lg text-md font-bold">PT Ecodu Pedjuang Harapan</h4>
                <p className="md:text-md text-sm">Kompleks Kenangan Palace</p>
                <p className="md:text-md text-sm md:text-justify">Jalan Kenanga Raya No. B3, Kelurahan Tanjung Sari, Kecamatan Medan Selayang, Kota Medan, Sumatera Utara, 20133 (Depan Kantor Balai PAUD)</p>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className="md:text-lg text-md font-bold">Produk Ecodu</h4>
                <div className="flex flex-col gap-2">
                    <Link href="/stan"><a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out md:text-md text-sm">Bimbel Ecodu STAN</a></Link>
                    <Link href="/stis"><a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out md:text-md text-sm">Bimbel Ecodu STIS</a></Link>
                    <Link href="/sekdin"><a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out md:text-md text-sm">Bimbel Ecodu SEKDIN Lainnya</a></Link>
                    <Link href="/ipdn"><a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out md:text-md text-sm">Bimbel Ecodu IPDN</a></Link>
                    <Link href="/utbk"><a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out md:text-md text-sm">Bimbel Ecodu UTBK</a></Link>
                    <Link href="https://siapujian.id"><a className="hover:bg-additional-color-400 p-3 cursor-pointer transition ease-in-out md:text-md text-sm">SiapUjian.id</a></Link>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <h4 className="md:text-lg text-md font-bold">Hubungi Kami</h4> 
                    <a href="mailto:admin@ecodu.id" className="flex gap-3 items-center hover:bg-additional-color-400 py-2 px-2 transition ease-in-out">
                        <div className="w-[32px] h-[32px]">
                            <Image src="/assets/kontak_email.png" width={32} height={32} alt="kontak_email" />
                        </div>
                        <p className="md:text-md text-[10px]">admin@ecodu.id</p>
                    </a>
                    <a href="https://bit.ly/gabung-ecodu" className="flex gap-3 items-center hover:bg-additional-color-400 py-2 px-2 transition ease-in-out">
                        <div className="w-[32px] h-[32px]">
                            <Image src="/assets/kontak_whatsapp.png" width={32} height={32} alt="kontak_email" />
                        </div>
                        <p className="md:text-md text-sm">0811-6016-010</p>
                    </a>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="md:text-lg text-md font-bold">Sosial Media</h4>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/ecodu.id" className="flex justify-center items-center w-[60px] h-[60px] rounded hover:bg-additional-color-400 transition ease-in-out">
                            <Image className="bg-[#fff] rounded-full" src="/assets/facebook.png" width={40} height={40} alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/ecodu.id" className="flex justify-center items-center w-[60px] h-[60px] rounded hover:bg-additional-color-400 transition ease-in-out">
                            <Image className="bg-[#fff] rounded-full" src="/assets/instagram.png" width={40} height={40} alt="instagram" />
                        </a>
                        <a href="https://www.twitter.com/ecodu_id" className="flex justify-center items-center w-[60px] h-[60px] rounded hover:bg-additional-color-400 transition ease-in-out">
                            <Image className="bg-[#fff] rounded-full" src="/assets/twitter.png" width={40} height={40} alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="md:text-lg text-md font-bold">Toko Buku</h4>
                <a href="https://www.tokopedia.com/tokobukuecodu" className="flex gap-3 items-center hover:bg-additional-color-400 py-2 px-2 transition ease-in-out">
                    <div className="w-[32px] h-[32px] bg-[#fff] rounded-full">
                        <Image src="/assets/tokopedia.png" width={32} height={32} alt="tokopedia" />
                    </div>
                    <p className="md:text-md text-sm">Tokopedia</p>
                </a>
                <a href="https://www.shopee.co.id/pedjuangstan" className="flex gap-3 items-center hover:bg-additional-color-400 py-2 px-2 transition ease-in-out">
                    <div className="w-[32px] h-[32px] bg-[#fff] rounded-full">
                        <Image src="/assets/shopee.png" width={32} height={32} alt="shopee" />
                    </div>
                    <p className="md:text-md text-sm">Shopee</p>
                </a>
                
            </div>
        </div>
    )
}

export default Footer;