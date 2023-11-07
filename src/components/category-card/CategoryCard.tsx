import React from 'react';
import CategoryProps from './CategoryCard.props';
import styles from './CategoryCard.module.scss';
import { P } from '../shared/headings/Heading';
import Image from 'next/image';

const CategoryCard: React.FC<CategoryProps> = ({
    productName,
    productImg,
    ...rest
}) => {
  return (
    <div className='bg-white px-6 py-2 rounded-md flex items-center justify-center gap-2 w-3/12'>
        <P>{productName}</P>

        <Image src={productImg} alt='productName' />
    </div>
  )
}

export default CategoryCard