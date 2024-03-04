import React from 'react'
function ProjectCard({video,name,description,color,github,link}) {

    const tailwindColor = color == 'black' ? 'bg-black' : `bg-${color}-500`;

    return (
        <div className={`${tailwindColor} rounded-sm text-white`}>
            <iframe width="450" height="250"  src="https://www.youtube.com/embed/Ix9lpSilPQQ?autoplay=1&loop=1&mute=1&controls=0&rel=0" title="T-hub" frameborder="0" allow="autoplay;picture-in-picture; web-share" allowfullscreen></iframe>
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