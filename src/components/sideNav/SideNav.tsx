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
import { P2 } from '../shared/headings/Heading';
import styles from './SideNav.module.scss';
import Link from 'next/link';

const SideNav = () => {

    const [active, setActive] = useState('')

    const handleActive = (option: string) => {
        setActive(option)
    }

    return (
        <div className={styles.sideNavContainer}>
            <Logo className='mb-11' />

            <div>
                <div className={styles.sideNavLinksContainer}>
                    <div onClick={() => handleActive('Menu')} className={active === 'Menu' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                        <Grid className='text-[#6F7A8D]' />
                        <P2 className={active === 'Menu' ? styles.sideNavOptionsActive : styles.sideNavOptions}>Home</P2>
                    </div>

                    <div onClick={() => handleActive('Card')} className={active === 'Card' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                        <Card />
                        <P2 className={active === 'Card' ? styles.sideNavOptionsActive : styles.sideNavOptions}>My Order</P2>
                    </div>

                    <div onClick={() => handleActive('Money')} className={active === 'Money' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                        <Money />
                        <P2 className={`${active === 'Money' ? styles.sideNavOptionsActive : styles.sideNavOptions} whitespace-nowrap`}>My Transactions</P2>
                    </div>

                    <div onClick={() => handleActive('Wallet')} className={active === 'Wallet' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                        <Wallet />
                        <P2 className={active === 'Wallet' ? styles.sideNavOptionsActive : styles.sideNavOptions}> My Wallet</P2>
                    </div>

                    <div onClick={() => handleActive('Orders')} className={active === 'Orders' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                        <Truck />
                        <P2 className={active === 'Orders' ? styles.sideNavOptionsActive : styles.sideNavOptions}>Track Orders</P2>
                    </div>
                </div>

                <hr className='w-full h-[1px] border border-[#E4E4E4] my-10' />

                <div className='flex flex-col lg:items-center min-[1440px]:items-start gap-5'>
                    <div onClick={() => handleActive('Support')} className={active === 'Support' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                        <Support />
                        <P2 className={active === 'Support' ? styles.sideNavOptionsActive : styles.sideNavOptions}>Support</P2>
                    </div>

                    <Link href='/faq'>
                        <div onClick={() => handleActive('Faqs')} className={active === 'Faqs' ? styles.sideNavLinksActive : styles.sideNavLinks}>
                            <Question />
                            <P2 className={active === 'Faqs' ? styles.sideNavOptionsActive : styles.sideNavOptions}>FAQS</P2>
                        </div>
                    </Link>
                </div>
            </div>

            <hr className='w-full h-[1px] border border-[#E4E4E4] min-[1440px]:hidden' />

            <Image src={Profile} alt='profile' />
        </div>
    )
}

export default SideNav