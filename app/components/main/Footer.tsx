import React from 'react'
import {RxLinkedinLogo, RxInstagramLogo, RxGithubLogo} from "react-icons/rx"
import {FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
<div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
    <div className='w-full flex flex-col items-center justify-center m-auto'>
        <div className='w-full h-full flex flex-row items-center justify-center flex-wrap z-[20]'>
            <a href='https://www.youtube.com/@videography9854' target='__blank'></a>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Community</div>
                    <a href='https://www.youtube.com/@videography9854' target='__blank'>
                    <p className='flex flex-row items-center my-[15px] curser-pointer'>
                        <FaYoutube />
                        <span className='text-[15px] ml-[6px]'>Youtube</span>
                    </p>
                    </a>
                    <a href='https://github.com/MatthijsDV2004' target='__blank'>
                    <p className='flex flex-row items-center my-[15px] curser-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>Github</span>
                    </p>
                    </a>
                </div>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Social Media</div>
                    <a href='https://www.instagram.com/matthijs.d/' target='__blank'>
                    <p className='flex flex-row items-center my-[15px] curser-pointer'>
                        <RxInstagramLogo />
                        <span className='text-[15px] ml-[6px]'>Instagram</span>
                    </p>
                    </a>
                    <a href='https://www.linkedin.com/in/matthijs-de-vries-2a0175258/' target='__blank'>
                    <p className='flex flex-row items-center my-[15px] curser-pointer'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>Linkedin</span>
                    </p>
                    </a>
                </div>
                {/* <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Email</div>
                    <p className='flex flex-row items-center my-[15px] curser-pointer'>
                        <span className='text-[15px] ml-[6px]'>matthijsdevries2004@gmail.com</span>
                    </p>
                </div> */}
            </div>
            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Matthijs De Vries 2024. All rights reserved
            </div>
        </div>

    </div>
  )
}

export default Footer