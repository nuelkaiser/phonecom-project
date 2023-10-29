import React, { ChangeEvent, useState } from 'react';
import './Nav.module.scss';
import Menu from '../../../assests/icons/menu.svg';
import Close from '../../../assests/icons/close.svg';
import Logo from '../../../assests/icons/logo.svg';
import Cart from '../../../assests/icons/cart.svg';
import Bell from '../../../assests/icons/bell.svg';
import Truck from '../../../assests/icons/truck.svg';
import Support from '../../../assests/icons/headset.svg';
import Wishlist from '../../../assests/icons/heart.svg';
import Question from '../../../assests/icons/question-circle.svg';
import Refer from '../../../assests/icons/nft-profile.svg';
import Chevron from '../../../assests/icons/chevron-right.svg';
import Profile from '../../../assests/images/profile.png'
import Image from 'next/image';
import { P2 } from '../headings/Heading';
import Button from '../buttons/Button';
import Checkbox from '../inputs/checkbox/Checkbox';
import SearchBar from '../inputs/searchbar/SearchBar';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [option, setOption] = useState(false);

    const [checkboxes, setCheckboxes] = useState({
        Power_Bank: false,
        Screen_Guard: false,
        Phone_Chargers: false
    });

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxes((prevState: any) => {
            return { ...prevState, [e.target.name]: e.target.checked };
        });
    };

    const handleOption = () => {
        setOption(!option)
    }

    return (
        <div className='w-full'>
            <div className={openMenu ? `bg-[#FFFFFF] flex items-center justify-between pt-10 pb-7 px-8` : `bg-[#FFFFFF] flex items-center justify-between pt-10 pb-7 px-8 border-b border-b-[#EAEDEC]`}>
                <div className='flex items-center gap-3  md:hidden'>
                    {
                        !openMenu && <Menu onClick={() => setOpenMenu(!openMenu)} />
                    }
                    {
                        openMenu && <Close onClick={() => setOpenMenu(!openMenu)} />
                    }

                    <Logo />
                </div>

                <div className='flex items-center gap-2  md:hidden'>
                    <div className='rounded-full bg-[#F5F4F7] p-2 border border-[#E0F3EC] cursor-pointer'>
                        <Cart />
                    </div>
                    <div className='rounded-full bg-[#F5F4F7] p-2 border border-[#E0F3EC] cursor-pointer'>
                        <Bell />
                    </div>
                    <Image src={Profile} alt='profile' className='cursor-pointer' />
                </div>




                <div className='hidden md:flex'>
                    <div className='flex items-center gap-2'>
                        <SearchBar placeholder='Search for Phone Assessories' className='lg:w-[400px] min-[1440px]:w-[646px]' />
                        <Button size='lg' color='secondary' className='text-white '>
                            Search
                        </Button>
                    </div>
                </div>

                <div className='hidden md:flex items-center gap-8'>
                    <div className='flex flex-col items-center'>
                        <Wishlist />
                        <P2>Wishlist</P2>
                    </div>

                    <div className='flex flex-col items-center'>
                        <Cart />
                        <P2>My Cart</P2>
                    </div>

                    <div className='flex flex-col items-center'>
                        <Bell />
                        <P2>Notification</P2>
                    </div>
                </div>
            </div>


            {
                openMenu &&
                <div className={openMenu ? `bg-white fixed top-[104px] left-0 bottom-0 right-0 px-9 flex flex-col justify-between py-10` : `top-0 ease-linear`}>
                    <div className='flex flex-col justify-between'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Truck />

                                <P2 className='text-[#6F7A8D]'>Track Orders</P2>
                            </div>

                            <Chevron />
                        </div>

                        <hr className='border border-[#EFF0F2] my-6' />

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Support />

                                <P2 className='text-[#6F7A8D]'>Support</P2>
                            </div>

                            <Chevron />
                        </div>

                        <hr className='border border-[#EFF0F2] my-6' />

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Question />

                                <P2 className='text-[#6F7A8D]'>FAQ</P2>
                            </div>

                            <Chevron />
                        </div>

                        <hr className='border border-[#EFF0F2] my-6' />

                        <div>
                            <div className='flex items-center justify-between' onClick={handleOption}>
                                <P2 className='text-[#6F7A8D]'>Categories</P2>
                                <Chevron className={option ? `rotate-90` : `rotate-0`} />
                            </div>

                            {
                                option &&
                                <div>
                                    <div className='flex items-center gap-2 mt-5'>
                                        <Checkbox value={checkboxes.Power_Bank} name='Power_Bank' onChange={handleCheckboxChange} />
                                        <P2 className='text-[#505050]'>Power Banks</P2>
                                    </div>

                                    <div className='flex items-center gap-2 my-2'>
                                        <Checkbox value={checkboxes.Screen_Guard} name='Screen_Guard' onChange={handleCheckboxChange} />
                                        <P2 className='text-[#505050]'>Screen Guard</P2>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <Checkbox value={checkboxes.Phone_Chargers} name='Phone_Chargers' onChange={handleCheckboxChange} />
                                        <P2 className='text-[#505050]'>Phone Chargers</P2>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>

                    <div>
                        <Button className='flex gap-3' size='lg' color='secondary'>
                            <Refer />
                            <P2 className='text-white'>Refer and  Earn</P2>
                        </Button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Nav