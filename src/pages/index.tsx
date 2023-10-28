import Button from "@/components/shared/buttons/Button";
import Checkbox from "@/components/shared/inputs/checkbox/Checkbox";
import Input from "@/components/shared/inputs/input/Input";
import SearchBar from "@/components/shared/inputs/searchbar/SearchBar";
import React, { useState } from "react";
import SearchIcon from '../assests/icons/search.svg';
import Nav from "@/components/shared/nav/Nav";
import SideNav from "@/components/sideNav/SideNav";

const index = () => {

  const [check, setCheck] = useState(false)

  const checking = () => {
    setCheck((prev) => !prev)
    console.log('i work')
  }

  return (
    <div className="bg-[#606060] md:flex">
      <SideNav />
      <Nav />
    </div>
  )
};

export default index;
