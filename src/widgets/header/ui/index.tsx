import React from 'react';
import { Logo } from "../ui/logo/index"
import { Menu } from './menu/ui';
import { Profile } from './profile';
const Header = () => {
    return (
        <header className='w-full bg-transparent py-6 px-5 text-white font-base z-50 top-0'>
            <div className="mx-auto max-w-[1240px] flex items-center justify-between">
                <Logo />
                <Menu />
                <Profile />
            </div>
        </header>
    );
};

export default Header;