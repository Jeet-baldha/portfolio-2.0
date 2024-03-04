import React from 'react'

function DownloadBtn() {
    return (
        <button className="cursor-pointer group relative flex gap-1.5 px-4 py-2 bg-blue-500 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
            <svg
                xmlns="https://drive.google.com/file/d/1fLP8X-NqdYFj5I2C_Gq-lenQ4mAlHMAj/view?usp=drive_link"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
            >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                    <g id="Interface / Download">
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="#f1f1f1"
                            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                            id="Vector"
                        ></path>
                    </g>
                </g>
            </svg>
            Resume
            <div className="absolute opacity-0 -bottom-full rounded-md py-1 px-1 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
            </div>
        </button>
    )
}

export default DownloadBtn