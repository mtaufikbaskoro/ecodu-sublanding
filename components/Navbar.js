import Image from "next/image";

const Navbar = (props) => {
    const handleToggle = () => {
        props.handleToggle()
    }
    return(
        <div className="flex justify-between items-center py-6 xl:max-w-7xl lg:max-w-4xl md:max-w-2xl max-w-xs mx-auto">
            <div className="flex-1">
                <Image src="/assets/ecodu.png" width={110} height={32} alt="logo" />
            </div>
            <div className="space-y-2 lg:hidden md:block" onClick={() => handleToggle()}>
                <span className="block w-8 h-1 bg-additional-color-100"></span>
                <span className="block w-8 h-1 bg-additional-color-100"></span>
                <span className="block w-8 h-1 bg-additional-color-100"></span>
            </div>
            <ul className="lg:flex hidden justify-between uppercase items-center">
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3"><a href="https://www.ecodu.id/blog">blog</a></li>
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3"><a href="https://www.ecodu.id/">tentang kami</a></li>
                <li className="text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer rounded-md px-6 py-3"><a href="#pricing">Paket</a></li>
                <li className="text-additional-color-200 font-bold bg-additional-color-100 cursor-pointer px-6 py-3 rounded-full"><a href="https://app.ecodu.id">login</a></li>
            </ul>
        </div>
    )
}

export default Navbar;