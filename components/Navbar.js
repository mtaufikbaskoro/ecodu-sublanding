import Image from "next/image";

const Navbar = (props) => {
    const handleToggle = () => {
        props.handleToggle()
    }
    return(
        <div className="flex justify-between items-center py-6 xl:max-w-7xl md:max-w-2xl max-w-xs mx-auto">
            <div className="flex-1">
                <Image src="/assets/ecodu.png" width={96} height={27.8} alt="logo" />
            </div>
            <div className="space-y-2 xl:hidden" onClick={() => handleToggle()}>
                <span className="block w-8 h-1 bg-gray-600"></span>
                <span className="block w-8 h-1 bg-gray-600"></span>
                <span className="block w-8 h-1 bg-gray-600"></span>
            </div>
            <ul className="xl:flex hidden justify-between uppercase items-center">
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3">blog</li>
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3">tentang kami</li>
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3">produk</li>
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3">promo</li>
                <li className="text-additional-color-200 font-bold bg-additional-color-100 cursor-pointer px-6 py-3 rounded-full">login</li>
            </ul>
        </div>
    )
}

export default Navbar;