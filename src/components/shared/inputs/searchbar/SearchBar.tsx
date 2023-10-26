import React from 'react';
import SearchBarProps from './SearchBar.props';
import SearchIcon from '../../../../assests/icons/search.svg';

const SearchBar: React.FC<SearchBarProps> = ({
    label,
    className,
    width,
    placeholder,
    ...rest
}) => {
  return (
    <div className={`rounded-md bg-[#F0F2F5] flex items-center gap-3 p-4 ${className}`}>
        <SearchIcon />
        <input className='w-full outline-none bg-transparent placeholder:text-[#000] placeholder:font-sans placeholder:text-sm' placeholder={placeholder}/>
    </div>
  )
}

export default SearchBar