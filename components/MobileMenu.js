import React, {useEffect} from 'react';

const MobileMenu = (props) => {
    return(
        <ul className={`${props.toggle ? "translate-y-0": "translate-y-72"} flex flex-col w-full justify-center items-center uppercase xl:hidden bg-additional-color-200 fixed bottom-0 transition ease-in-out`}>
            <li className="w-full text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer text-center px-6 py-3"><a href="https://www.ecodu.id/blog">blog</a></li>
            <li className="w-full text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer text-center px-6 py-3"><a href="https://www.ecodu.id/">tentang kami</a></li>
            <li className="w-full text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer text-center px-6 py-3"><a href="#pricing">Paket</a></li>
            <li className="w-full text-additional-color-100 font-bold hover:bg-additional-color-100 hover:text-additional-color-200 transition ease-in-out cursor-pointer text-center px-6 py-3"><a href="https://app.ecodu.id"></a>login</li>
            <li className="w-full text-additional-color-100 font-bold transition ease-in-out cursor-pointer text-center px-6 py-3" onClick={() => props.handleToggle()}>tutup</li>
        </ul>
    );
}

export default MobileMenu;
