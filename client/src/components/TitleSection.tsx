import React from 'react'

const TitleSection = ({ titleName }: {titleName: string}) => {
    return (
        <div className='bg-black'>
            <div className="w-full h-[40vh] content-center max-w-[90%] mx-auto">
                <h1 className='font-bold text-[60px] text-center text-white'>{titleName}</h1>
            </div>
        </div>
    )
}

export default TitleSection