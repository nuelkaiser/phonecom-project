import React from 'react'
import InputProps from './Input.props'
import { P } from '../../headings/Heading'

const Input: React.FC<InputProps> = ({
    label,
    name,
    placeholder,
    className,
    type
}) => {
    return (
        <div>
            <P className='mb-2'>{label}</P>
            <div className={`rounded-md border border-[#292B2D] p-4 ${className}`}>
                <input name={name} type={type} className='w-full outline-none' placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input