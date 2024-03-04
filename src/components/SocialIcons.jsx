import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin, FaReddit } from "react-icons/fa";

function SocialIcons() {
    return (
        <div className=" flex justify-between py-3 text-4xl my-10 hover:cursor-pointer">
            <div className=" shadow-sq p-2 text-pink-600">
                <a href="https://www.instagram.com/jeet_baldha_" target="blank"><RiInstagramFill /></a>
            </div>
            <div className=" shadow-sq p-2">
                <a href="https://github.com/Jeet-baldha" target="blank"><FaGithub /></a>
            </div>
            <div className=" shadow-sq p-2 text-blue-600">
                <a href="https://www.linkedin.com/in/jeetbaldha/" target="blank"><FaLinkedin /></a>
            </div>
            <div className=" shadow-sq p-2">
                <a href="https://twitter.com/jeetbaldha26" target="blank"><RiTwitterXFill /></a>
            </div>
            <div className=" shadow-sq p-2 text-red-500">
                <a href="https://www.reddit.com/user/baldha_/" target="blank"><FaReddit /></a>
            </div>
        </div>
    )
}

export default SocialIcons