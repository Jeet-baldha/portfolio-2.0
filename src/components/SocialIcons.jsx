import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaReddit } from "react-icons/fa";

function SocialIcons() {
    return (
        <div className=" flex justify-between py-3 text-2xl hover:cursor-pointer">
            <RiInstagramFill />
            <FaGithub />
            <RiTwitterXFill></RiTwitterXFill>
            <FaReddit></FaReddit>
        </div>
    )
}

export default SocialIcons