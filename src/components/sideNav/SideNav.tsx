import React, { useState } from 'react';
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
import { P, P2 } from '../shared/headings/Heading';
import styles from './SideNav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideNav = () => {



    const router = useRouter();

    return (
        <div className={styles.sideNavContainer}>
            <Logo className='mb-11' />

            <div>
                <div className={styles.sideNavLinksContainer}>
                    <Link href='/'>
                        <div className={router.pathname === '/' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Grid className='text-[#6F7A8D]' />
                            <P2 className={router.pathname === '/' ? styles.sideNavOptionsActive : styles.sideNavOptions}>Home</P2>
                        </div>
                    </Link>

                    <Link href='/order'>
                        <div className={router.pathname === '/order' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Card />
                            <P2 className={router.pathname === '/order' ? styles.sideNavOptionsActive : styles.sideNavOptions}>My Order</P2>
                        </div>
                    </Link>

                    <Link href='/transaction'>
                        <div className={router.pathname === '/transaction' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Money />
                            <P2 className={`${router.pathname === '/transaction' ? styles.sideNavOptionsActive : styles.sideNavOptions} whitespace-nowrap`}>My Transactions</P2>
                        </div>
                    </Link>

                    <Link href='/wallet'>
                        <div className={router.pathname === '/wallet' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Wallet />
                            <P2 className={router.pathname === '/wallet' ? styles.sideNavOptionsActive : styles.sideNavOptions}> My Wallet</P2>
                        </div>
                    </Link>

                    <Link href='/track-order'>
                        <div className={router.pathname === '/track-order' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Truck />
                            <P2 className={router.pathname === '/track-order' ? styles.sideNavOptionsActive : styles.sideNavOptions}>Track Orders</P2>
                        </div>
                    </Link>
                </div>

                <hr className='w-full h-[1px] border border-[#E4E4E4] my-10' />

                <div className='flex flex-col lg:items-center min-[1440px]:items-start gap-5'>
                    <Link href='/support'>
                        <div className={router.pathname === '/support' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Support />
                            <P2 className={router.pathname === '/support' ? styles.sideNavOptionsActive : styles.sideNavOptions}>Support</P2>
                        </div>
                    </Link>

                    <Link href='/faq'>
                        <div className={router.pathname === '/faq' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Question />
                            <P2 className={router.pathname === '/faq' ? styles.sideNavOptionsActive : styles.sideNavOptions}>FAQS</P2>
                        </div>
                    </Link>
                </div>
            </div>

            <hr className='w-full h-[1px] border border-[#E4E4E4] min-[1440px]:hidden' />

            <div>
                <div className=' flex justify-center items-center gap-3'>
                    <Image src={Profile} alt='profile' className='w-10 h-10' />

                    <div className='hidden min-[1440px]:block'>
                        <P2 className='text-[#101928] font-semibold mb-1'>Alison Eyo</P2>
                        <P className='text-[#475367]'>alison.e@rayna.ui</P>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav