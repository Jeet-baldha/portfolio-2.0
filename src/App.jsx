import SkillSection from "./SkillSection"
import Carousel from "./components/Carousel/Carousel"
import DownloadBtn from "./components/DownloadBtn"
import ProjectSection from "./components/ProjectSection"
import SocialIcons from './components/SocialIcons'
import './index.css'



function App() {
  return (
    <>
      <div className=' w-xl overflow-hidden bg-white   rounded-sm m-auto sm:mt-40 shadow-md p-5'>
        <div className=' flex w-full gap-5'>

          <img src='https://avatars.githubusercontent.com/u/106021946?v=4' className=' h-24 rounded-full'></img>
          <div className=" w-full">
            <h1 className=' text-4xl font-bold pt-3'>Jeet Baldha</h1>
            <h3 className=" text-xl">Full stack developer</h3>
          </div>
        </div>
        <div className=" pt-5">
          <p className=" text-justify">Welcome! I'm a 3rd-year Computer Engineering student hailing from the vibrant state of Gujarat, India. With a profound passion for technology, I specialize in the art of Full Stack Development.</p>
        </div>
        <div className=" w-full flex justify-center mt-5">
          <DownloadBtn />
        </div>

        <h1 className=" text-3xl font-bold mt-10"> Projects work</h1>
        <div className=" my-10">
          <Carousel />
        </div>
        <h1 className=" text-3xl my-10 font-bold border-b-4 border-b-yellow-400 inline-block pb-2 rounded-md">Technology & Tools</h1>
        <SkillSection></SkillSection>
        <SocialIcons />
      </div>
    </>
  )
}

export default App
