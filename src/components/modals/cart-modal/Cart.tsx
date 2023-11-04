import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { H4, P } from "@/components/shared/headings/Heading";
import Close from "@/assets/icons/close.svg";
import Image from "next/image";
import Button from "@/components/shared/buttons/Button";
import CartProps from "./Cart.props";
import CartProduct from "@/components/cart-product/CartProduct";
import ProductImg from '@/assets/images/product.png';
import CartImg from '@/assets/images/cart-img.png'


const Cart: React.FC<CartProps> = ({
    open,
    handleCartModal
}) => {

    return (
        <div className={open ? `flex flex-col` : `hidden`}>
            <div className={styles.modalContainer}></div>

            <div className={styles.notificationContainer}>
                <Close className={styles.closeIcon} onClick={handleCartModal} />

                <div className="flex flex-col relative h-full">
                    <div className="flex items-center gap-4 mb-5  px-7">
                        <Image src={CartImg} alt="notifiy" className="lg:hidden" />

                        <H4 className="text-[#3E3838] font-bold">My Cart (4)</H4>
                    </div>

                    <div className="flex flex-col gap-8 overflow-y-scroll h-[600px] lg:h-screen px-7">
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                        <CartProduct productImg={ProductImg} productBrand="Orimo" productName="Orimo Charger" favorite bin />
                    </div>

                    <div className={styles.checkOutContainer}>
                        <div className="flex items-center justify-between">
                            <P>Subtotal</P>

                            <H4 className="text-[#101928]">N45,000.00</H4>
                        </div>

                        <Button color='secondary' size="sm" className="mt-3">
                            Proceed to Cart
                        </Button>
                    </div>

                    {/* <div className=' flex flex-col items-center gap-9 mt-20'>
                          <Image src={Empty} alt='bell'/>
                          <P className='text-[#475367] text-center max-w-[252px] md:max-w-sm'>
                              You have’nt made any transaction yet. Your wallet Payments would appear here when you
                          </P>
                      </div> */}
                </div>
            </div>
        </div>
    );
}

export default Cart