import SkillSection from "./SkillSection"
import Carousel from "./components/Carousel/Carousel"
import EducationSection from "./components/Carousel/EducationSection"
import DownloadBtn from "./components/DownloadBtn"
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
            <h3 className=" text-xl border-b-2 border-b-blue-500 inline-block">Full stack developer</h3>
          </div>
        </div>
        <div className=" pt-5">
          <p className=" text-justify">Hello! I'm a third-year Computer Engineering student from Gujarat, India, specializing in Full Stack Development with a strong passion for technology.</p>
        </div>
        <div className=" w-full flex justify-center mt-5 p-5">
         <a href="https://drive.google.com/file/d/1fLP8X-NqdYFj5I2C_Gq-lenQ4mAlHMAj/view?usp=drive_link" target="blank"> <DownloadBtn /></a>
        </div>
        <hr></hr>
        <h1 className=" text-3xl font-bold mt-10 border-b-blue-500 border-b-4 inline-block rounded-md py-1"> Projects</h1>
        <div className=" my-10">
          <Carousel />
        </div>
        <hr></hr>
        <h1 className=" text-3xl my-10 font-bold border-b-4 border-b-blue-500 inline-block pb-2 rounded-md">Technology & Tools</h1>
        <SkillSection></SkillSection>
        <hr></hr>
        <div className=" w-full text-black p  my-10">
          <h1 className=" font-bold text-3xl mb-5 border-b-blue-500 border-b-4 inline-block rounded-md py-1">Education</h1>
          <EducationSection></EducationSection>
        </div>
        <hr></hr>
        <div className=" w-full text-black p  my-10">
          <h1 className=" font-bold text-3xl border-b-blue-500 border-b-4 inline-block rounded-md py-1">Links</h1>
          
        <SocialIcons />
        </div>
        <h1 className="text-2xl text-center  font-bold mt-10"> Thanks for visit </h1>
      </div>
    </>
  )
}

export default App
