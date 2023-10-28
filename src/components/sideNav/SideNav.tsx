import React from 'react';
import './SideNav.module.scss';
import Logo from '../../assests/icons/logo.svg';
import Grid from '../../assests/icons/grid.svg';
import Card from '../../assests/icons/card.svg';
import Wallet from '../../assests/icons/wallet.svg';
import Money from '../../assests/icons/money-2.svg';
import Support from '../../assests/icons/headset.svg';
import Question from '../../assests/icons/question-circle.svg';
import Truck from '../../assests/icons/truck.svg';
import Profile from '../../assests/images/profile.png';
import Image from 'next/image';
import { P2 } from '../shared/headings/Heading';

const SideNav = () => {
    return (
        <div className='hidden lg:flex md:flex-col md:justify-between md:bg-white md:border-r md:border-[#EAEDEC] md:h-screen md:px-9 md:py-20'>
            <Logo className='mb-11'/>

            <div>
                <div className='flex flex-col md:items-center t min-[1440px]:items-start gap-5'>
                    <div className='flex items-center gap-3'>
                        <Grid className='text-[#6F7A8D]' />
                        <P2 className='lg:hidden min-[1440px]:block text-[#6F7A8D]'>Home</P2>
                    </div>

                    <div className='flex items-center gap-3'>
                        <Card />
                        <P2 className='lg:hidden min-[1440px]:block text-[#6F7A8D]'>My Order</P2>
                    </div>

                    <div className='flex items-center gap-3'>
                        <Money />
                        <P2 className='lg:hidden min-[1440px]:block text-[#6F7A8D] whitespace-nowrap'>My Transactions</P2>
                    </div>

                    <div className='flex items-center gap-3'>
                        <Wallet />
                        <P2 className='lg:hidden min-[1440px]:block text-[#6F7A8D]'> My Wallet</P2>
                    </div>

                    <div className='flex items-center gap-3'>
                        <Truck />
                        <P2 className='lg:hidden min-[1440px]:block text-[#6F7A8D]'>Track Orders</P2>
                    </div>
                </div>

                <hr className='w-full h-[1px] border border-[#E4E4E4] my-10' />

                <div className='flex flex-col lg:items-center min-[1440px]:items-start gap-5'>
                    <div className='flex items-center gap-3'>
                        <Support />
                        <P2 className='lg:hidden min-[1440px]:block text-[#6F7A8D]'>Support</P2>
                    </div>

                    <div className='flex items-center gap-3'>
                        <Question />
                        <P2 className='lg:hidden min-[1440px]:block  text-[#6F7A8D]'>FAQS</P2>
                    </div>
                </div>
            </div>

            <hr className='w-full h-[1px] border border-[#E4E4E4] min-[1440px]:hidden' />

            <Image src={Profile} alt='profile' />
        </div>
    )
}

export default SideNav