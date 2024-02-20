import React from 'react'


function SkillIcon({icon, name, className}) {
    return (
        <div className=' inline-block'>
            <div className={`shadow-sq p-2 inline-block w-full text-7xl ${className}`}>
                {icon}
            </div>
            <h1 className=' text-center font-semibold'> {name}</h1>
        </div>
    )
}

export default SkillIcon