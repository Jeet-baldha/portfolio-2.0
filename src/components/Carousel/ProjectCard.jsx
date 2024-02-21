import React from 'react'
function ProjectCard({video,name,description,color}) {

    const tailwindColor = color == 'black' ? 'bg-black' : `bg-${color}-500`;

    return (
        <div className={`${tailwindColor} rounded-sm text-white`}>
            <video src={video} autoPlay muted controls loop></video>
            <div className=' p-3'>
                <h1 className=' text-xl font-bold'>{name}</h1>
                <p>{description} </p>
                <div className=' py-3 text-sm font-semibold flex gap-5 text-black   '>
                    <a href='#' className=' px-3 py-1 rounded-md bg-white'>Github</a>
                    <a href='#' className=' px-3 py-1 rounded-md bg-white'>Live</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard