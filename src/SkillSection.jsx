import React from 'react'
import SkillIcon from "./components/SkillIcon"
import { FaCss3, FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAppwrite } from "react-icons/si";

function SkillSection() {
    return (
        <div className=" py-5 flex justify-between flex-wrap gap-5">
            <SkillIcon icon={<FaHtml5 />} name={'HTML'} className={'text-orange-500'} />
            <SkillIcon icon={<FaCss3 />} name={'CSS'} className={'text-blue-500'} />
            <SkillIcon icon={<SiTailwindcss />} name={'Tailwind'} className={'text-teal-500'} />
            <SkillIcon icon={<SiJavascript />} name={'Javascript'} className={'text-yellow-500'} />
            <SkillIcon icon={<SiMongodb />} name={'MongoDB'} className={' text-green-500'} />
            <SkillIcon icon={<SiExpress />} name={'Express'} className=' text-black' />
            <SkillIcon icon={<FaReact />} name={'React'} className={'text-sky-400'} />
            <SkillIcon icon={<FaNode />} name={'Node'} className='text-green-500' />
            <SkillIcon icon={<SiAppwrite />} name={'Appwrite'} className=' text-pink-600' />
            <SkillIcon icon={<FaGitAlt />} name={'Git'} className=' text-red-500' />
            <SkillIcon icon={<SiPostman />} name={'Postman'} className=' text-orange-500' />
            <SkillIcon icon={<IoLogoFigma />} name={'Figma'} className=' text-purple-500' />
        </div>
    )
}

export default SkillSection