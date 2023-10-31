import React from 'react';
import CartProductProps from './CartProduct.props';
import Image from 'next/image';
import { P, P2 } from '../shared/headings/Heading';
import Heart from '@/assets/icons/heart.svg';
import Bin from '@/assets/icons/bin.svg';

const CartProduct: React.FC<CartProductProps> = ({
    productImg,
    productBrand,
    productName,
    favorite,
    bin
}) => {
    return (
        <div className='flex items-center gap-4'>
            <Image src={productImg} alt='product' />

            <div className='flex flex-col gap-5 w-full'>
                <P2 className='text-[#606060]'>{productBrand}</P2>

                <div className='flex items-center justify-between'>
                    <P className='text-[#101928] font-semibold'>{productName}</P>

                    <div className='flex items-center gap-3'>
                        <Heart />
                        <Bin />
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4 rounded-3xl bg-[#E3F8EF] py-2 px-4'>
                        <div className='cursor-pointer'>
                            -
                        </div>

                        <div>
                            0
                        </div>

                        <div className='cursor-pointer'>
                            +
                        </div>
                    </div>

                    <P className='text-[#101928] font-extrabold'>N12000</P>
                </div>
            </div>
        </div>
    )
}

export default CartProduct