import React from 'react'

export default function Card({ title, source, cat, creator, link }) {
    console.log(title ,cat )
    return (
        <>
            <div className='containerr  '>
                <div className='container-blog '>
                    <div className='w-[400px] h-[300px] rounded-2xl bg-[#E63946] flex justify-between flex-col'>
                        <div className='top'>
                            <div className="title "><h4 className='pt-[18px] pl-[10px] text-xl font-semibold text-white'>{title}</h4></div>
                        </div>
                        <div className="cat flex gap-3 pl-[10px]">
                            {/* Check if there are categories before rendering */}
                            {cat[0] !== undefined ? (
                                // Loop through categories and display them
                                cat.map((category, index) => (
                                    <span key={index} className='border-2 px-2 py-1 rounded-2xl text-white border-[#1D3557]'>#{category}</span>
                                ))
                            ) : (
                                // Render a message when there are no categories
                                <span className='border-2 px-2 py-1 rounded-2xl text-white border-[#1D3557]'>No categories</span>
                            )}
                        </div>
                        <div className='bottom flex flex-col gap-3'>
                            <div className="author "><div className='flex gap-2 items-center'><img src="/icon/author.svg" alt="copyright" width={35} className='pl-[10px]' /> <p className=' font-medium text-white'>{creator}</p></div></div>
                            <div className="copyright "><div className='flex gap-2 items-center'><img src="/icon/copyright.svg" alt="copyright" width={35} className='pl-[10px]' /> <p className=' font-medium text-white'>{source}</p></div></div>
                            <div className="cta pl-[10px] pb-[18px]"><a href={link}><button className='bg-[#1D3557] py-2 px-3 rounded-[25px] text-white'>Read Now</button></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
