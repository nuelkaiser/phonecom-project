import React from 'react';
import styles from './NotificationMessage.module.scss';
import NotificationMessageProps from './NotificationMessage.props'
import { P, P2 } from '../shared/headings/Heading';
import Image from 'next/image';

const NotificationMessage: React.FC<NotificationMessageProps> = ({
    title,
    message,
    date,
    time,
    image
}) => {
    return (
        <div className='min-[1440px]:flex items-center gap-4'>
            <Image src={image} alt='notify' className='hidden min-[1440px]:block w-20 h-20 rounded-md' />

            <div className='py-4 border-b border-b-[#E4E7EC]'>
                <P2 className='text-[#101928] font-medium'>{title}</P2>

                <P className='my-4 text-[#667085] max-w-xs'>{message}</P>

                <div className='flex items-center justify-between'>
                    <P>{date}</P>

                    <P>{time}</P>
                </div>
            </div>
        </div>
    )
}

export default NotificationMessage